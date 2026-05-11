/**
 * Footer Component
 * Modern Minimalism Design System
 * - Minimal footer dengan copyright
 * - Back to top button
 * - Subtle border
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/60">
              © {currentYear} Portfolio. Semua hak dilindungi.
            </p>
            <p className="text-xs text-foreground/40 mt-1">
              Dibuat dengan passion dan minimalism
            </p>
          </div>

          {/* Right - Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors duration-300 hover-underline"
          >
            Kembali ke Atas ↑
          </button>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-foreground/40 text-center">
            Design Philosophy: Less is More | Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
