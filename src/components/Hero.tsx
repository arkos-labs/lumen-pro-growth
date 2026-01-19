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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
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

      <div className="container relative z-10 px-4 pt-24 pb-12 md:py-20 flex flex-col justify-center h-full">
        <div className="max-w-4xl mx-auto text-center">


          {/* H1 - Pain-focused headline with Elegant Serif Style - Optimized for Mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
            <span className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Relamping LED Industriel</span>
            <br />
            <span className="text-blue-400 italic font-light drop-shadow-lg mix-blend-screen block mt-2">& Économies d'Énergie Directes</span>
          </h1>

          {/* Subheadline - Readable on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-in-up drop-shadow-md px-2" style={{ animationDelay: '0.2s' }}>
            Transformez votre éclairage industriel : jusqu'à <span className="text-white font-semibold">60% d'économies directes</span>, 0€ d'investissement initial, rentabilité immédiate.
          </p>

          <p className="hidden md:block text-white/90 mb-10 animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '0.3s' }}>
            Installation Square sans arrêt d'activité • Garantie 10 ans • Certifié RGE
          </p>

          {/* Mobile-only visible short trust line */}
          <p className="md:hidden text-white/90 text-sm mb-8 animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '0.3s' }}>
            Installation sans arrêt • Garantie 10 ans
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToForm}
              variant="default"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all bg-blue-600/90 hover:bg-blue-500 backdrop-blur-sm text-white font-bold tracking-wide text-lg py-6 md:py-8 px-8 md:px-10 border-none rounded-full md:rounded-md"
              aria-label="Demander un audit énergétique gratuit"
            >
              Demander un audit offert
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" aria-hidden="true" />
            </Button>
          </div>


        </div>

        {/* Trust indicators - Certifications - Scaled down for mobile */}
        <div className="mt-8 md:mt-16 animate-fade-in-up w-full max-w-screen-xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <p className="text-xs md:text-sm font-medium text-white/80 mb-4 md:mb-6 text-center uppercase tracking-wider drop-shadow-md">Nos certifications & partenaires</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 w-full px-2">
            <img
              src={logoRge}
              alt="Certification RGE Qualibat"
              className="h-16 sm:h-20 md:h-32 lg:h-40 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
            />
            <img
              src={logoQualifelec}
              alt="Certification Qualifelec"
              className="h-14 sm:h-16 md:h-28 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
            />
            <img
              src={logoCee}
              alt="Certification CEE"
              className="h-14 sm:h-16 md:h-28 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
            />
            <img
              src={logoRt2020}
              alt="Norme RT 2020"
              className="h-16 sm:h-20 md:h-36 lg:h-44 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl opacity-90 hover:opacity-100"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - Smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
};

export default Hero;
