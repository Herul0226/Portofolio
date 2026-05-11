import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * Portfolio Section Component
 * Modern Minimalism Design System
 * - Staggered grid layout (tidak regular grid)
 * - Hover lift effect pada cards
 * - Intersection Observer untuk fade-in animation
 * - Data structure yang mudah dikustomisasi
 *
 * CARA MENAMBAHKAN KARYA:
 * 1. Tambahkan object baru ke array portfolioItems di bawah
 * 2. Isi: title, description, category, image, link
 * 3. Gambar akan ditampilkan otomatis dengan hover effect
 */

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string; // URL gambar
  link?: string; // URL ke project
  fullWidth?: boolean; // true untuk item yang lebih besar
}

// DATA PORTOFOLIO - EDIT DI SINI UNTUK MENAMBAHKAN KARYA ANDA
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan UI minimalis dan checkout flow yang smooth',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=croph=600https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=cropfit=crop',
    link: '#',
    fullWidth: true,
  },
  {
    id: '2',
    title: 'Mobile App Design',
    description: 'Aplikasi mobile untuk manajemen task dengan design yang clean dan intuitif',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=400&fit=croph=400https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=400&fit=cropfit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Dashboard analytics dengan visualisasi data yang elegan dan responsive',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    link: '#',
  },
  {
    id: '4',
    title: 'Brand Identity',
    description: 'Sistem identitas visual lengkap untuk startup tech dengan konsep minimalis',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    link: '#',
    fullWidth: true,
  },
  {
    id: '5',
    title: 'Website Redesign',
    description: 'Redesign website perusahaan dengan fokus pada user experience dan performance',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
    link: '#',
  },
  {
    id: '6',
    title: 'Illustration Series',
    description: 'Series ilustrasi custom untuk kampanye marketing dengan style yang konsisten',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
    link: '#',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers: NodeJS.Timeout[] = [];
    
    // Stagger animation untuk setiap item
    portfolioItems.forEach((item, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => {
          const newSet = new Set(prev);
          newSet.add(item.id);
          return newSet;
        });
      }, index * 100);
      
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-border bg-secondary/30"
    >
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Karya Terbaru
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-foreground/60 max-w-2xl">
            Koleksi proyek terbaru yang menampilkan keahlian dalam design dan development
          </p>
        </div>

        {/* Portfolio Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg border border-border hover-lift transition-all duration-500 ${
                item.fullWidth ? 'md:col-span-2' : ''
              } ${
                visibleItems.has(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}

            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 bg-background">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      {item.title}
                    </h3>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-foreground/50 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-foreground/60 mb-6">
            Ingin menambahkan karya Anda? Edit file{' '}
            <code className="bg-secondary px-2 py-1 rounded text-sm">
              PortfolioSection.tsx
            </code>{' '}
            dan tambahkan item baru ke array <code className="bg-secondary px-2 py-1 rounded text-sm\">portfolioItems</code>
          </p>
          <div className="inline-block p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-foreground font-medium">
              Struktur data yang diperlukan:
            </p>
            <pre className="mt-2 text-xs text-foreground/70 overflow-x-auto">
{`{
  id: 'unique-id',
  title: 'Judul Proyek',
  description: 'Deskripsi singkat',
  category: 'Kategori',
  image: 'URL gambar',
  link: 'URL proyek',
  fullWidth: false // true untuk item besar
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
