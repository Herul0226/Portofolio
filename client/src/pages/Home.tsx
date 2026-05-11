import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfolio Website
 * Modern Minimalism Design System
 * 
 * Struktur halaman:
 * 1. Navigation - Sticky header dengan smooth scroll
 * 2. Hero Section - Asymmetric layout dengan animated accent line
 * 3. About Section - Tentang dan skills
 * 4. Portfolio Section - Staggered grid dengan karya
 * 5. Contact Section - Form kontak dan social links
 * 6. Footer - Minimal footer dengan back to top
 * 
 * Semua animasi menggunakan Intersection Observer untuk performance optimal
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
