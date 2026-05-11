import { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

/**
 * Contact Section Component
 * Modern Minimalism Design System
 * - Simple contact form dengan validation
 * - Social media links
 * - Intersection Observer untuk fade-in animation
 */
export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field');
      return;
    }

    // Simulasi submit (dalam production, kirim ke backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form setelah 3 detik
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@example.com',
      color: 'text-foreground/60 hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'text-foreground/60 hover:text-primary',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'text-foreground/60 hover:text-primary',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'text-foreground/60 hover:text-primary',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Mari Berkolaborasi
              </h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
              <p className="mt-6 text-lg text-foreground/60">
                Saya selalu terbuka untuk proyek baru dan peluang kolaborasi. Hubungi saya untuk diskusi lebih lanjut.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tuliskan pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                {submitted ? '✓ Pesan Terkirim!' : 'Kirim Pesan'}
              </button>
            </form>

            {/* Social Links */}
            <div className="border-t border-border pt-12">
              <p className="text-center text-sm text-foreground/60 mb-6">
                Atau hubungi saya melalui media sosial
              </p>
              <div className="flex justify-center gap-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-colors duration-300 hover:scale-110 transform`}
                      title={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
