import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import squareLogo from "@/assets/square-logo-new.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Clear state
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  /* Navigation links removed as requested */

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-0 shadow-sm"
      >
        <div className="w-full px-6 md:px-10 flex items-center justify-between relative">
          {/* Logo - Left */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection("hero"); } }}
            role="button"
            tabIndex={0}
            aria-label="Retour à l'accueil"
          >
            <img
              src={squareLogo}
              alt="Square Lighting Solutions - Logo"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2" aria-label="Navigation principale">
            <a
              href="#benefits"
              onClick={(e) => { e.preventDefault(); scrollToSection("benefits"); }}
              className="text-xs lg:text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Avantages
            </a>
            <a
              href="#simulator"
              onClick={(e) => { e.preventDefault(); scrollToSection("simulator"); }}
              className="text-xs lg:text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Simulateur
            </a>
            <Link
              to="/expertise"
              className="text-xs lg:text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Actualités
            </Link>
          </nav>

          {/* Right Actions - Right aligned */}
          <div className="flex items-center gap-6">
            {location.pathname !== "/landing" && (
              <a
                href="#audit-form"
                onClick={(e) => { e.preventDefault(); scrollToSection("audit-form"); }}
                className="hidden md:inline-flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 border-none px-6 h-10 text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                Demander un audit gratuit
              </a>
            )}

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top-5 overflow-y-auto pb-10">
          <nav className="flex flex-col gap-4 items-start" aria-label="Navigation mobile">
            <a
              href="#benefits"
              className="text-xl font-medium text-gray-900 py-3 w-full text-left"
              onClick={(e) => { e.preventDefault(); scrollToSection("benefits"); }}
            >
              Avantages
            </a>
            <a
              href="#simulator"
              className="text-xl font-medium text-gray-900 py-3 w-full text-left"
              onClick={(e) => { e.preventDefault(); scrollToSection("simulator"); }}
            >
              Simulateur
            </a>
            <Link
              to="/expertise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-gray-900 py-3 w-full text-left"
            >
              Actualités
            </Link>

            <div className="h-px w-full bg-gray-100 my-2" />

            {location.pathname !== "/landing" && (
              <a
                href="#audit-form"
                className="flex items-center justify-center w-full h-14 text-lg rounded-xl bg-blue-600 text-white font-bold"
                onClick={(e) => { e.preventDefault(); scrollToSection("audit-form"); }}
              >
                Demander un audit gratuit
              </a>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
