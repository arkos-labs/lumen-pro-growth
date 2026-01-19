import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown } from "lucide-react";
import heroImage1 from "@/assets/hero-slide-1.jpg";
import heroImage3 from "@/assets/hero-slide-3.jpg";
import heroImage5 from "@/assets/hero-slide-5.jpg";
import AuditModal from "@/components/AuditModal";
import logoRge from "@/assets/rge-qualibat.png";
import logoQualifelec from "@/assets/qualifelec.png";
import logoCee from "@/assets/cee-cert.png";
import logoRt2020 from "@/assets/rt2020.png";
import logoOrion from "@/assets/orion-logo.png";

const heroImages = [heroImage1, heroImage3, heroImage5];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);


  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out contrast-110 saturate-105 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: index === 0 || index === currentImageIndex ? `url(${image})` : 'none',
            backgroundColor: '#0a0a0a'
          }}
          aria-hidden="true"
        />
      ))}

      {/* Blended Overlay - Subtle gradient for text readability without hiding the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 opacity-80" />

      {/* Texture blending for 'fondu' effect */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">


          {/* H1 - Pain-focused headline with Elegant Serif Style to match Helios Marine vibe */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
            <span className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Relamping LED Industriel</span>
            <br />
            <span className="text-blue-400 italic font-light drop-shadow-lg mix-blend-screen">& Économies d'Énergie Directes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-4 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Transformez votre éclairage industriel : jusqu'à <span className="text-white font-semibold">60% d'économies directes</span>, 0€ d'investissement initial, rentabilité immédiate.
          </p>

          <p className="text-white/90 mb-10 animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '0.3s' }}>
            Installation Square sans arrêt d'activité • Garantie 10 ans • Certifié RGE
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToForm}
              variant="default"
              size="xl"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all bg-blue-600/90 hover:bg-blue-500 backdrop-blur-sm text-white font-bold tracking-wide text-lg py-8 px-10 border-none"
              aria-label="Demander un audit énergétique gratuit"
            >
              Demander un audit offert
              <ArrowRight className="w-6 h-6 ml-3" aria-hidden="true" />
            </Button>
          </div>


        </div>

        {/* Trust indicators - Certifications */}
        <div className="mt-12 animate-fade-in-up w-full max-w-screen-xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm font-medium text-white/80 mb-6 text-center uppercase tracking-wider drop-shadow-md">Nos certifications & partenaires</p>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-20 w-full px-4">
            <img
              src={logoRge}
              alt="Certification RGE Qualibat - Garant de l'environnement pour relamping LED"
              className="h-28 md:h-44 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              title="Certification RGE Qualibat pour l'efficacité énergétique"
            />
            <img
              src={logoQualifelec}
              alt="Certification Qualifelec - Expert en éclairage industriel"
              className="h-24 md:h-36 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
              decoding="async"
              title="Qualifelec, gage de qualité en installation électrique"
            />
            <img
              src={logoCee}
              alt="Certification CEE - Certificats d'Économies d'Énergie"
              className="h-24 md:h-36 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
              decoding="async"
              title="Certificats d'Économies d'Énergie - Financement jusqu'à 100%"
            />
            <img
              src={logoRt2020}
              alt="Norme RT 2020 - Efficacité énergétique des bâtiments industriels"
              className="h-32 md:h-64 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
              decoding="async"
              title="Conformité RT 2020 pour des bâtiments plus performants"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - Smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
};

export default Hero;
