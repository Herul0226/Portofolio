import { useEffect, useRef, useState } from 'react';

/**
 * About Section Component
 * Modern Minimalism Design System
 * - Minimal text dengan fokus pada konten
 * - Intersection Observer untuk fade-in animation
 * - Skill cards dengan hover effect
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const skills = [
    'UI/UX Design',
    'Web Development',
    'React & TypeScript',
    'Tailwind CSS',
    'Animation & Motion',
    'Responsive Design',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Tentang Saya
                </h2>
                <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Saya adalah seorang designer dan developer yang passionate tentang menciptakan digital experiences yang indah dan fungsional. Dengan pengalaman dalam UI/UX design dan web development, saya menggabungkan estetika minimalis dengan functionality yang kuat.
              </p>

              <p className="text-base text-foreground/60 leading-relaxed">
                Filosofi desain saya adalah "less is more" – setiap elemen memiliki tujuan, dan setiap interaksi dirancang untuk memberikan nilai kepada user. Saya percaya bahwa desain yang baik adalah desain yang tidak terlihat, namun membuat perbedaan yang signifikan.
              </p>
            </div>

            {/* Right - Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Keahlian</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover-lift transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: isVisible ? `${index * 50}ms` : '0ms',
                    }}
                  >
                    <p className="text-sm font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-foreground/60 mt-2">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">30+</p>
              <p className="text-sm text-foreground/60 mt-2">Klien Puas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-foreground/60 mt-2">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
