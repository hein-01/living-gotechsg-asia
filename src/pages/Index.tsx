import React, { useEffect, useRef, useState } from "react";
import GoTechLogo from "@/assets/gotech-logo.png";
import HeroPromo from "@/assets/hero-promo.png";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, PhoneCall } from "lucide-react";

const Index: React.FC = () => {
  const heroSlides = [
    "linear-gradient(rgba(14,23,42,0.4), rgba(14,23,42,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6')",
    "linear-gradient(rgba(14,23,42,0.4), rgba(14,23,42,0.6)), url('/placeholder.svg')",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const WHATSAPP_NUMBER = "6593805126"; // GoTech WhatsApp
  const VIBER_NUMBER = "+959951343605"; // GoTech Viber

  const soloCarouselRef = useRef<HTMLDivElement | null>(null);
  const coupleCarouselRef = useRef<HTMLDivElement | null>(null);
  const familyCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    const container = ref.current;
    if (!container) return;
    const scrollAmount = container.clientWidth || 0;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const buildWhatsAppUrl = (modelName: string) => {
    const message = `Hi, I am interested in booking the "${modelName}" modular unit.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const buildViberUrl = (modelName: string) => {
    const message = `Hi, I am interested in booking the "${modelName}" modular unit.`;
    return `viber://chat?number=${encodeURIComponent(VIBER_NUMBER)}&text=${encodeURIComponent(message)}`;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide((index + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => goToSlide(currentSlide + 1);
  const goToPrev = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto max-w-[1100px] px-4 py-4 flex items-center justify-between">
          <img src={GoTechLogo} alt="GoTech Logo" className="h-10 w-auto" />
          <nav>
            <ul className="flex space-x-6 text-sm font-semibold text-muted-foreground">
              <li><a href="#catalog" className="hover:text-foreground">Catalog</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: heroSlides[currentSlide] }}
        aria-label="Hero slideshow"
      >
        <button
          type="button"
          onClick={goToPrev}
          className="hover-scale absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
          aria-label="Previous hero slide"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="hover-scale absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
          aria-label="Next hero slide"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 rounded-full ${idx === currentSlide ? "bg-foreground" : "bg-muted"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="bg-card px-4 py-16 md:px-20 lg:px-40">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-4xl">
              Choose Your Home
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Select the perfect modular unit for your lifestyle.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* The Solo card */}
            <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full bg-muted">
                <div
                  ref={soloCarouselRef}
                  className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {/* Images */}
                  {/* Re-using same URLs as reference design */}
                  [
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                  ].map((url, idx) => (
                    <div
                      key={idx}
                      className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                  ))
                </div>
                <button
                  type="button"
                  onClick={() => scrollCarousel(soloCarouselRef, "left")}
                  className="hover-scale absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Previous Solo image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(soloCarouselRef, "right")}
                  className="hover-scale absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Next Solo image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Solo Modular Unit</h3>
                <p className="mb-4 text-sm text-muted-foreground flex-grow">
                  Compact and efficient living space perfect for individuals.
                </p>
                <div className="mt-auto flex space-x-3">
                  <a
                    href={buildWhatsAppUrl("Solo Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={buildViberUrl("Solo Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    <PhoneCall size={16} />
                    <span>Viber</span>
                  </a>
                </div>
              </div>
            </div>

            {/* The Couple card */}
            <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full bg-muted">
                <div
                  ref={coupleCarouselRef}
                  className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                  ].map((url, idx) => (
                    <div
                      key={idx}
                      className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollCarousel(coupleCarouselRef, "left")}
                  className="hover-scale absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Previous Couple image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(coupleCarouselRef, "right")}
                  className="hover-scale absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Next Couple image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Couple Modular Unit</h3>
                <p className="mb-4 text-sm text-muted-foreground flex-grow">
                  Cozy and spacious design ideal for couples.
                </p>
                <div className="mt-auto flex space-x-3">
                  <a
                    href={buildWhatsAppUrl("Couple Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={buildViberUrl("Couple Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    <PhoneCall size={16} />
                    <span>Viber</span>
                  </a>
                </div>
              </div>
            </div>

            {/* The Family card */}
            <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full bg-muted">
                <div
                  ref={familyCarouselRef}
                  className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                  ].map((url, idx) => (
                    <div
                      key={idx}
                      className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollCarousel(familyCarouselRef, "left")}
                  className="hover-scale absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Previous Family image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(familyCarouselRef, "right")}
                  className="hover-scale absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-sm"
                  aria-label="Next Family image"
                >
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Family Modular Unit</h3>
                <p className="mb-4 text-sm text-muted-foreground flex-grow">
                  Spacious and comfortable for the whole family.
                </p>
                <div className="mt-auto flex space-x-3">
                  <a
                    href={buildWhatsAppUrl("Family Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={buildViberUrl("Family Modular Unit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    <PhoneCall size={16} />
                    <span>Viber</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background px-4 py-16 md:px-20 lg:px-40">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Have questions? Reach out to us anytime.
            </p>
          </div>
          <form className="mx-auto max-w-lg space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-border bg-background p-2 text-foreground"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
