import { ArrowDown } from 'lucide-react';

/**
 * Hero Section Component
 * Modern Minimalism Design System
 * - Asymmetric layout dengan text di kiri
 * - Animated accent line di bawah title
 * - Geometric shape di background
 * - Scroll indicator dengan smooth animation
 */
export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Geometric Background Shape */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10" />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-slideInLeft">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Halo, Saya
                <span className="block text-primary">Designer & Developer</span>
              </h1>
              {/* Animated Accent Line */}
              <div className="mt-4 h-1 w-24 bg-primary rounded-full animate-underlineExpand" />
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              Saya menciptakan pengalaman digital yang minimalis, elegan, dan fungsional. Setiap proyek dirancang dengan perhatian terhadap detail dan fokus pada user experience.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToPortfolio}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Lihat Karya
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-foreground/20 text-foreground rounded-md font-medium hover:border-foreground/40 transition-all duration-300"
              >
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>

        {/* Right Decorative Element */}
        <div className="hidden md:flex animate-slideInRight">
          <div className="relative w-full aspect-square">
            {/* Geometric shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-primary/20 rounded-3xl" />
              <div className="absolute w-48 h-48 border-2 border-primary/10 rounded-full" />
              <div className="absolute w-32 h-32 bg-primary/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
