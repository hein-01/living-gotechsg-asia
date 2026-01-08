import React, { useEffect, useState } from "react";
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
      {/* Top-level wrapper to match full-page layout */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-border bg-card/90 px-6 py-4 shadow-sm backdrop-blur-md lg:px-20">
          <div className="flex items-center gap-5 text-foreground">
            <img
              src={GoTechLogo}
              alt="GoTech Living logo"
              className="h-10 w-auto object-contain md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm font-medium">
              <a href="#" className="transition-colors hover:text-primary">
                Home
              </a>
              <a href="#catalog" className="transition-colors hover:text-primary">
                Catalog
              </a>
              <a href="#process" className="transition-colors hover:text-primary">
                Process
              </a>
              <a href="#contact" className="transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
            <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold leading-normal tracking-[0.015em] text-primary-foreground transition-colors hover:bg-primary/90">
              <span className="truncate">Download App</span>
            </button>
          </div>

          {/* Mobile menu icon (non-functional placeholder) */}
          <div className="flex items-center md:hidden">
            <span className="material-symbols-outlined cursor-pointer">menu</span>
          </div>
        </header>

        {/* Hero Section with background carousel-style images */}
        <section className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-4 py-10 md:px-20 lg:px-40">
          <div
            className="absolute inset-0 z-0 flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            aria-hidden="true"
          >
            {heroSlides.map((backgroundImage, index) => (
              <div
                key={index}
                className="h-full min-w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage }}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <button
            type="button"
            onClick={goToPrev}
            className="hover-scale absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-md sm:left-4 sm:h-10 sm:w-10"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="hover-scale absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-md backdrop-blur-md sm:right-4 sm:h-10 sm:w-10"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">chevron_right</span>
          </button>

          {/* Slide indicator pill */}
          <div className="absolute bottom-8 right-8 z-20">
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg backdrop-blur-md">
              <span>
                {currentSlide + 1}/{heroSlides.length}
              </span>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex max-w-[960px] flex-col items-center gap-6 text-center">
            <div className="animate-bounce-slow pointer-events-auto rounded-full border-2 border-primary-foreground/20 bg-accent px-6 py-2 text-accent-foreground shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wide">Starts from $2,900 USD</span>
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight tracking-[-0.033em] text-primary-foreground drop-shadow-md sm:text-5xl md:text-6xl">
              Affordable Smart Homes.
              <br />
              Simply Better.
            </h1>
            <h2 className="max-w-2xl text-balance text-base font-normal leading-relaxed text-primary-foreground/90 drop-shadow-sm sm:text-lg md:text-xl">
              Ready-made modular housing solutions built with Light Steel Frame technology. Faster, stronger, and cooler than shipping containers.
            </h2>
            <div className="pt-4">
              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto sm:min-w-[160px]">
                <span className="truncate">View Our Models</span>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full border border-border transition-all ${
                    currentSlide === index ? "bg-primary" : "bg-background/60 hover:bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
                  <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {/* Images */}
                    {/* Re-using same URLs as reference design */}
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V2cO0JhFXMykj7zEcPux5mPadRIcWzPTyhbFYWYehb_WNAsxvxyTpxF_fyO_WqJ-wvyCBnMEtZuPFDpPnjIeD-l3cHrh2dnUo693qR7Vxt3uvkCu5CEun4yxdy34yDo5B6f_ZOHvCVMxPNfuIFe2NBRqFHaCRjZbeV9BcrDU2-vwXBBxue_5ibr_TfhbWnMk8pZECo2DOlIPtXc6-o9XL4-puExApzk7lFbBdt53zZ8OY5MXbssfcCj68RQbiXQm0fraCORd-4uV",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    ].map((url, idx) => (
                      <div
                        key={idx}
                        className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${url})` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">
                        The Solo
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">Studio Unit</p>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-1 text-[11px] font-bold text-primary sm:text-xs">
                      Best Seller
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Perfect for students or Airbnb. Compact living with everything you need.
                  </p>

                  <div className="flex items-center gap-4 border-y border-border/70 py-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">square_foot</span> 15m²
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">bathroom</span> 1 Bath
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-border/70 pt-2">
                    <p className="text-xs font-bold text-foreground">Specifications</p>
                    <div className="mb-2 grid grid-cols-3 gap-2 text-center text-[10px] text-muted-foreground md:text-xs">
                      {["Height", "Width", "Depth"].map((label, idx) => (
                        <div key={label} className="rounded border border-border bg-muted p-1">
                          <div className="text-[10px] uppercase text-muted-foreground/80">{label}</div>
                          <div className="font-bold">
                            {idx === 0 ? "3.2m" : idx === 1 ? "3.0m" : "5.0m"}
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {[
                        "20% downpayment during contract signing phase",
                        "After sales support",
                        "2 story with prefabricated",
                        "3 stories with light steel technology",
                        "Solar panel ready",
                        "Sound insulation",
                        "Resistant to 7.5 magnitude earthquake",
                        "Service life 50 yrs",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[14px] text-primary">
                            verified
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-accent sm:text-3xl">
                        $4,900
                      </span>
                      <span className="text-xs font-medium text-muted-foreground sm:text-sm">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[18px]">videocam</span>
                      <span>View 3d Video</span>
                    </button>
                    <Dialog>
                      <div className="flex flex-col gap-3">
                        <a
                          href={buildWhatsAppUrl("The Solo")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-emerald-600 bg-emerald-600 py-3 text-sm font-medium text-emerald-50 transition-colors hover:bg-emerald-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span>Whatsapp</span>
                            <span className="text-xs opacity-90">+65 93805126</span>
                          </div>
                        </a>
                        <a
                          href={buildViberUrl("The Solo")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-purple-600 bg-purple-600 py-3 text-sm font-medium text-purple-50 transition-colors hover:bg-purple-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <PhoneCall className="h-4 w-4" aria-hidden="true" />
                            <span>Viber</span>
                            <span className="text-xs opacity-90">+95 9951343605</span>
                          </div>
                        </a>
                        <DialogTrigger asChild>
                          <button className="w-full rounded-md border border-primary bg-muted py-3 text-sm font-medium text-primary transition-colors hover:bg-muted/80">
                            Book Now
                          </button>
                        </DialogTrigger>
                      </div>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book The Solo</DialogTitle>
                          <DialogDescription>
                            Leave your details and we&apos;ll contact you within 24 hours to confirm your booking.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          className="mt-4 space-y-4"
                          onSubmit={(event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const name = String(formData.get("name") ?? "").trim();
                            const email = String(formData.get("email") ?? "").trim();
                            const phone = String(formData.get("phone") ?? "").trim();
                            const location = String(formData.get("location") ?? "").trim();
                            const timeframe = String(formData.get("timeframe") ?? "").trim();

                            if (!name || !email || !phone || !location || !timeframe) {
                              alert("Please fill in all fields before submitting.");
                              return;
                            }

                            const emailPattern = /.+@.+\..+/;
                            if (!emailPattern.test(email)) {
                              alert("Please enter a valid email address.");
                              return;
                            }

                            alert("Thank you! We\'ll contact you within 24 hours.");
                            event.currentTarget.reset();
                          }}
                        >
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="solo-name">Name</Label>
                              <Input id="solo-name" name="name" required maxLength={100} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="solo-email">Email</Label>
                              <Input id="solo-email" name="email" type="email" required maxLength={255} />
                            </div>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="solo-phone">Phone</Label>
                              <Input id="solo-phone" name="phone" required maxLength={50} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="solo-location">Location</Label>
                              <Input id="solo-location" name="location" required maxLength={255} />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="solo-timeframe">Timeframe</Label>
                            <Input
                              id="solo-timeframe"
                              name="timeframe"
                              placeholder="e.g. Within 1 month"
                              required
                              maxLength={100}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label>Preferred unit</Label>
                            <Select defaultValue="The Solo" name="unit">
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="The Solo">The Solo</SelectItem>
                                <SelectItem value="The Couple">The Couple</SelectItem>
                                <SelectItem value="The Family">The Family</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* The Couple card */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 md:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 w-full bg-muted">
                  <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBDYR60CMV40kwXcpTvxLTlmYSQT6oqCa0XFvcXCs-AbTaKpx8MG86OTo-bO1RHIBD1_maXIQ2vAxJntyn4JoqSCl61Q1j0pP9ccrZKirEh0J33QaPuf8Ey3t7dTr6VSfCKhLs2VZc0Dv4L9ROq2-_i0MClgOcK8G5lEGJYk37cSE_VUVpFqrklb0Rdtah980qVB7oOq26B3hzhMx5u6xE7vy5fh0zo6tPfwn4uhsY0t9giVg5fhncTWJsYyfAPKzFnbmaSEykhCGU",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    ].map((url, idx) => (
                      <div
                        key={idx}
                        className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${url})` }}
                      />
                    ))}
                  </div>
                  <div className="absolute right-3 top-3 z-20 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                    Popular
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">The Couple</h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">Executive Suite</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Luxury living with separate bedroom. Ideal for young professionals.
                  </p>

                  <div className="flex items-center gap-4 border-y border-border/70 py-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">square_foot</span> 30m²
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">bed</span> 1 Bed
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">bathroom</span> 1 Bath
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-border/70 pt-2">
                    <p className="text-xs font-bold text-foreground">Specifications</p>
                    <div className="mb-2 grid grid-cols-3 gap-2 text-center text-[10px] text-muted-foreground md:text-xs">
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Height</div>
                        <div className="font-bold">3.2m</div>
                      </div>
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Width</div>
                        <div className="font-bold">5.0m</div>
                      </div>
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Depth</div>
                        <div className="font-bold">6.0m</div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {[
                        "20% downpayment during contract signing phase",
                        "After sales support",
                        "2 story with prefabricated",
                        "3 stories with light steel technology",
                        "Solar panel ready",
                        "Sound insulation",
                        "Resistant to 7.5 magnitude earthquake",
                        "Service life 50 yrs",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[14px] text-primary">
                            verified
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-accent sm:text-3xl">
                        $7,500
                      </span>
                      <span className="text-xs font-medium text-muted-foreground sm:text-sm">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[18px]">videocam</span>
                      <span>View 3d Video</span>
                    </button>
                    <Dialog>
                      <div className="flex flex-col gap-3">
                        <a
                          href={buildWhatsAppUrl("The Couple")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-emerald-600 bg-emerald-600 py-3 text-sm font-medium text-emerald-50 transition-colors hover:bg-emerald-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span>Whatsapp</span>
                            <span className="text-xs opacity-90">+65 93805126</span>
                          </div>
                        </a>
                        <a
                          href={buildViberUrl("The Couple")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-purple-600 bg-purple-600 py-3 text-sm font-medium text-purple-50 transition-colors hover:bg-purple-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <PhoneCall className="h-4 w-4" aria-hidden="true" />
                            <span>Viber</span>
                            <span className="text-xs opacity-90">+95 9951343605</span>
                          </div>
                        </a>
                        <DialogTrigger asChild>
                          <button className="w-full rounded-md border border-primary bg-muted py-3 text-sm font-medium text-primary transition-colors hover:bg-muted/80">
                            Book Now
                          </button>
                        </DialogTrigger>
                      </div>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book The Couple</DialogTitle>
                          <DialogDescription>
                            Leave your details and we&apos;ll contact you within 24 hours to confirm your booking.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          className="mt-4 space-y-4"
                          onSubmit={(event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const name = String(formData.get("name") ?? "").trim();
                            const email = String(formData.get("email") ?? "").trim();
                            const phone = String(formData.get("phone") ?? "").trim();
                            const location = String(formData.get("location") ?? "").trim();
                            const timeframe = String(formData.get("timeframe") ?? "").trim();

                            if (!name || !email || !phone || !location || !timeframe) {
                              alert("Please fill in all fields before submitting.");
                              return;
                            }

                            const emailPattern = /.+@.+\..+/;
                            if (!emailPattern.test(email)) {
                              alert("Please enter a valid email address.");
                              return;
                            }

                            alert("Thank you! We\'ll contact you within 24 hours.");
                            event.currentTarget.reset();
                          }}
                        >
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="couple-name">Name</Label>
                              <Input id="couple-name" name="name" required maxLength={100} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="couple-email">Email</Label>
                              <Input id="couple-email" name="email" type="email" required maxLength={255} />
                            </div>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="couple-phone">Phone</Label>
                              <Input id="couple-phone" name="phone" required maxLength={50} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="couple-location">Location</Label>
                              <Input id="couple-location" name="location" required maxLength={255} />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="couple-timeframe">Timeframe</Label>
                            <Input
                              id="couple-timeframe"
                              name="timeframe"
                              placeholder="e.g. Within 1 month"
                              required
                              maxLength={100}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label>Preferred unit</Label>
                            <Select defaultValue="The Couple" name="unit">
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="The Solo">The Solo</SelectItem>
                                <SelectItem value="The Couple">The Couple</SelectItem>
                                <SelectItem value="The Family">The Family</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* The Family card */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full bg-muted">
                  <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBl84q7qZMfOjbv0PoB6zvVdZlWU993w7quE9VGXsHrFAxlD5xafVxrRTfxKg05Mh-cB5R4wddufRPoJASl_ucsE5iwMvq9drvyKG1m_khnuZ2V97Fy6b1vA0UMHDJqDDQqg2U-4jqG-lxeIcW5M2qhdI7Zw748Pb_yMtx8btCC8a8GKeSATTehNErBcVx5cm4catA1k1LKBPnfk0EthhzvldUvoVNhBC59Xz_nhbVVZEUfrDNfOI_zSYApnV3ebIIFSbH5ZSaMD2EC",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6",
                    ].map((url, idx) => (
                      <div
                        key={idx}
                        className="h-full min-w-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${url})` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">The Family</h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">Double Unit</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Spacious interconnected units. Separate living area and bedrooms.
                  </p>

                  <div className="flex items-center gap-4 border-y border-border/70 py-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">square_foot</span> 45m²
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">bed</span> 2 Bed
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px]">chair</span> Living
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-border/70 pt-2">
                    <p className="text-xs font-bold text-foreground">Specifications</p>
                    <div className="mb-2 grid grid-cols-3 gap-2 text-center text-[10px] text-muted-foreground md:text-xs">
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Height</div>
                        <div className="font-bold">3.2m</div>
                      </div>
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Width</div>
                        <div className="font-bold">6.0m</div>
                      </div>
                      <div className="rounded border border-border bg-muted p-1">
                        <div className="text-[10px] uppercase text-muted-foreground/80">Depth</div>
                        <div className="font-bold">7.5m</div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {[
                        "20% downpayment during contract signing phase",
                        "After sales support",
                        "2 story with prefabricated",
                        "3 stories with light steel technology",
                        "Solar panel ready",
                        "Sound insulation",
                        "Resistant to 7.5 magnitude earthquake",
                        "Service life 50 yrs",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[14px] text-primary">
                            verified
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-accent sm:text-3xl">
                        $12,000
                      </span>
                      <span className="text-xs font-medium text-muted-foreground sm:text-sm">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[18px]">videocam</span>
                      <span>View 3d Video</span>
                    </button>
                    <Dialog>
                      <div className="flex flex-col gap-3">
                        <a
                          href={buildWhatsAppUrl("The Family")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-emerald-600 bg-emerald-600 py-3 text-sm font-medium text-emerald-50 transition-colors hover:bg-emerald-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span>Whatsapp</span>
                            <span className="text-xs opacity-90">+65 93805126</span>
                          </div>
                        </a>
                        <a
                          href={buildViberUrl("The Family")}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-md border border-purple-600 bg-purple-600 py-3 text-sm font-medium text-purple-50 transition-colors hover:bg-purple-700"
                        >
                          <div className="flex flex-col items-center gap-1 leading-snug">
                            <PhoneCall className="h-4 w-4" aria-hidden="true" />
                            <span>Viber</span>
                            <span className="text-xs opacity-90">+95 9951343605</span>
                          </div>
                        </a>
                        <DialogTrigger asChild>
                          <button className="w-full rounded-md border border-primary bg-muted py-3 text-sm font-medium text-primary transition-colors hover:bg-muted/80">
                            Book Now
                          </button>
                        </DialogTrigger>
                      </div>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book The Family</DialogTitle>
                          <DialogDescription>
                            Leave your details and we&apos;ll contact you within 24 hours to confirm your booking.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          className="mt-4 space-y-4"
                          onSubmit={(event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const name = String(formData.get("name") ?? "").trim();
                            const email = String(formData.get("email") ?? "").trim();
                            const phone = String(formData.get("phone") ?? "").trim();
                            const location = String(formData.get("location") ?? "").trim();
                            const timeframe = String(formData.get("timeframe") ?? "").trim();

                            if (!name || !email || !phone || !location || !timeframe) {
                              alert("Please fill in all fields before submitting.");
                              return;
                            }

                            const emailPattern = /.+@.+\..+/;
                            if (!emailPattern.test(email)) {
                              alert("Please enter a valid email address.");
                              return;
                            }

                            alert("Thank you! We\'ll contact you within 24 hours.");
                            event.currentTarget.reset();
                          }}
                        >
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="family-name">Name</Label>
                              <Input id="family-name" name="name" required maxLength={100} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="family-email">Email</Label>
                              <Input id="family-email" name="email" type="email" required maxLength={255} />
                            </div>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="family-phone">Phone</Label>
                              <Input id="family-phone" name="phone" required maxLength={50} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Label htmlFor="family-location">Location</Label>
                              <Input id="family-location" name="location" required maxLength={255} />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="family-timeframe">Timeframe</Label>
                            <Input
                              id="family-timeframe"
                              name="timeframe"
                              placeholder="e.g. Within 1 month"
                              required
                              maxLength={100}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label>Preferred unit</Label>
                            <Select defaultValue="The Family" name="unit">
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="The Solo">The Solo</SelectItem>
                                <SelectItem value="The Couple">The Couple</SelectItem>
                                <SelectItem value="The Family">The Family</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-background px-4 py-20 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-4xl">
                How It Works
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                From digital design to physical reality in 4 simple steps.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-border lg:block" />

              <div className="z-10 flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm lg:bg-transparent lg:shadow-none">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background">
                  <span className="material-symbols-outlined text-3xl">design_services</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">1. Select Design</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Choose your perfect model from our catalog on the web or mobile app.
                </p>
              </div>

              <div className="z-10 flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm lg:bg-transparent lg:shadow-none">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-md ring-4 ring-background">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">2. Secure Booking</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pay a 50% downpayment to immediately lock in your slot and materials.
                </p>
              </div>

              <div className="z-10 flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm lg:bg-transparent lg:shadow-none">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-md ring-4 ring-background">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">3. Rapid Production</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We manufacture your unit in our specialized factory in just 2 weeks.
                </p>
              </div>

              <div className="z-10 flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm lg:bg-transparent lg:shadow-none">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-md ring-4 ring-background">
                  <span className="material-symbols-outlined text-3xl">local_shipping</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">4. Delivery &amp; Install</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We ship directly to your site and complete installation in as little as 1 day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-border bg-card px-4 py-16 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1100px] text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-4xl">
              Prefabs buildings are for a wide range of uses
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground">
              We design and manufacture prefabricated steel buildings in one-story, two-story, three-story, or four-story options, based entirely on customer requirements.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { icon: "home", label: "Residential Homes" },
                { icon: "groups", label: "Social Buildings" },
                { icon: "school", label: "Schools" },
                { icon: "local_hospital", label: "Hospitals" },
                { icon: "apartment", label: "Office Buildings" },
                { icon: "hotel", label: "Dormitory Buildings" },
                { icon: "construction", label: "Labor Camps" },
                { icon: "wc", label: "WC & Shower Buildings" },
                { icon: "medical_services", label: "First Aid Units" },
                { icon: "restaurant", label: "Kitchens & Refectory" },
                { icon: "science", label: "Laboratories" },
                { icon: "sports_esports", label: "Recreation Buildings" },
                { icon: "shield", label: "Explosion-Proof" },
                { icon: "local_laundry_service", label: "Laundry Buildings" },
                { icon: "sports_soccer", label: "Sports Facilities" },
                { icon: "military_tech", label: "Military Camps" },
                { icon: "security", label: "Security Cabins" },
                { icon: "volunteer_activism", label: "Refugee Camps" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-muted p-4 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+6593805126"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              <span>Call Us Today</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Get a free consultation for your project.</p>
          </div>
        </section>

        {/* Benefits / Promise Section */}
        <section className="bg-card/80 px-4 py-16 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10 text-center md:text-left">
              <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Why GoTech?
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
                Cooler, faster and stronger homes for modern living.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Every unit is engineered for tropical climates with precision steel framing, premium insulation
                and efficient construction so you get a home that feels good to live in from day one.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="hover-scale animate-fade-in rounded-2xl border border-border bg-background/80 p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <span className="material-symbols-outlined text-base">thermostat</span>
                    <span>Thermal comfort</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Superior insulation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stay up to 7°C cooler inside compared to conventional builds, even in peak afternoon heat.
                  </p>
                </div>

                <div className="hover-scale animate-fade-in rounded-2xl border border-border bg-background/80 p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <span className="material-symbols-outlined text-base">bolt</span>
                    <span>Fast build</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Move-in in weeks</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Precision off-site fabrication means cleaner sites, less noise and dramatically shorter timelines.
                  </p>
                </div>

                <div className="hover-scale animate-fade-in rounded-2xl border border-border bg-background/80 p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <span className="material-symbols-outlined text-base">shield</span>
                    <span>Built to last</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Steel you can trust</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Galvanized, rust-resistant frames engineered to international standards for durability and safety.
                  </p>
                </div>

                <div className="hover-scale animate-fade-in rounded-2xl border border-border bg-background/80 p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <span className="material-symbols-outlined text-base">savings</span>
                    <span>Smart value</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Predictable costs</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Transparent factory-direct pricing and minimal on-site variations keep your budget under control.
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-4 rounded-3xl bg-gradient-to-br from-background to-muted/70 p-6 shadow-xl ring-1 ring-border/60 md:mt-0 md:translate-y-2 md:animate-fade-in">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  Engineered, not improvised
                </p>
                <p className="text-sm text-muted-foreground">
                  From structural design to final assembly, every GoTech unit follows a repeatable, quality-checked
                  process. That means fewer surprises for you and a home that performs exactly as promised.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <span className="material-symbols-outlined text-base">energy_savings_leaf</span>
                    <span>Energy-efficient envelope</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    <span>Factory QA on every unit</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <span className="material-symbols-outlined text-base">deployed_code</span>
                    <span>Light steel frame system</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-[960px] px-6 text-center text-primary-foreground">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to upgrade your living?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Download the app to customize your unit and track your project progress in real-time.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="hover-scale rounded-lg bg-background px-8 py-3 text-lg font-bold text-foreground shadow-lg transition-colors hover:bg-muted">
                Download Apk
              </button>
              <button className="hover-scale rounded-lg border border-primary-foreground/20 bg-foreground px-8 py-3 text-lg font-bold text-background shadow-lg transition-colors hover:bg-foreground/90">
                Google Play Store (coming soon)
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-foreground/10 bg-foreground px-6 py-16 text-primary-foreground lg:px-20"
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-accent">home_work</span>
                <h3 className="text-xl font-bold">GoTech Living</h3>
              </div>
              <p className="text-sm text-primary-foreground/80">Smart Housing. Simple Living.</p>
              <p className="mt-4 text-xs text-primary-foreground/60">
                © 2023 GoTech Living.
                <br />
                All rights reserved.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="mb-2 text-lg font-bold">Contact Us</h4>
              <a
                href="mailto:hein@gotechsg.asia"
                className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                <span className="text-sm">hein@gotechsg.asia</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span className="text-sm">Viber: +95 9951343605</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span className="text-sm">WhatsApp: +65 93805126</span>
              </a>
              <a
                href="https://living.gotechsg.asia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <span className="material-symbols-outlined text-sm">language</span>
                <span className="text-sm">living.gotechsg.asia</span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="mb-2 text-lg font-bold">Manage your project</h4>
              <p className="mb-2 text-sm text-primary-foreground/80">
                Download our app to track manufacturing and delivery.
              </p>
              <div className="flex flex-col gap-3">
                <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:w-auto">
                  <span className="material-symbols-outlined">android</span>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none text-primary-foreground/70">Get it on</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:w-auto">
                  <span className="material-symbols-outlined">ios</span>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none text-primary-foreground/70">Download on</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
