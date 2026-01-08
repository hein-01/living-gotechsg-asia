import React from "react";
import GoTechLogo from "@/assets/gotech-logo.png";

const Index: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Top-level wrapper to match full-page layout */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-border bg-card/90 px-6 py-4 shadow-sm backdrop-blur-md lg:px-20">
          <div className="flex items-center gap-4 text-foreground">
            <img src={GoTechLogo} alt="GoTech Living logo" className="h-8 w-auto" />
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
        <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-4 py-12 md:px-20 lg:px-40">
          <div
            className="absolute inset-0 z-0 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-hidden="true"
          >
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="h-full min-w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    index === 1
                      ? "linear-gradient(rgba(14,23,42,0.4), rgba(14,23,42,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGzVrIT2zYNe521vUeyB5n3Uf-IneUofyQNxOCovrwF7iRIvs6gNw7KCM-Jon7ebxcm-L2-ea71w9jkdhYOh-Brhotia0thZszvqPL5HAP2CSwS6oC_jryxNmg2z2nAwoj4dvvD8GsPq7U6i3EDkldwqIiXYJvtm11mEKJVjmXIlBme6zUf8s1U5Q2Ko-Bp-13ALgjI10zhwJdDpa_nxaqA1fuCoThUavOgqO8AiV-kEVlkJYzIO-6J46sZZ5ct5YgtOZQgVqzGuj6')"
                      : index === 2
                        ? "linear-gradient(rgba(14,23,42,0.4), rgba(14,23,42,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw0vt7eDy97ATXdA6R4ZjWHInNzVR-YrdFwTgL6DRDJdj-jNDrRRBdTqWmo7cAor8VH8EUpi5ylFrrJOA1VJwD6YGCovDk-uh-g3gRjJ7TxgbwRTnbeUnFNKplhjazEUTy3vHJeSJJCoUdZAquEaVbF7VMjt8yRZsjWomjJ8w6BV-MR1x5e_gZBR2INp6n1cs0WDpyHYOUgS8grGIXufqQeD-3bNCbGbNEwAzpAJJ264yvlN5lcJb5660EmcLzkk4sg-9-td2qMMqr')"
                        : "linear-gradient(rgba(14,23,42,0.4), rgba(14,23,42,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC887anOshRPEW0mtagLDnDWAPoGMqVcpXcQiXLafoOiZeimsJJhz-DWLqcuoXYsIxBBpYP2-DlxhI8pF_7H03n94vtCYSoPTk-QERH5a4ljRB_M41FqFwOr2QPyIrq_GuROLBGdY9ROiQHBVb6R13OR89BlQ-GOwJJHQij1nQqw8JZGPIHtJvi1gz8W8_l_GsJkkCgGi1AmblLty1jD-uCKuYt9FWPmgfvHyQNh4YrlNuueWW3L-xa5_6dyq_L3f0XJQ9FdDqHX4Xi')",
                }}
              />
            ))}
          </div>

          <div className="absolute bottom-8 right-8 z-20">
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg backdrop-blur-md">
              <span>1/3</span>
            </div>
          </div>

          <div className="relative z-10 flex max-w-[960px] flex-col items-center gap-6 text-center">
            <div className="animate-bounce-slow pointer-events-auto rounded-full border-2 border-primary-foreground/20 bg-accent px-6 py-2 text-accent-foreground shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wide">Starts from $2,900 USD</span>
            </div>
            <h1 className="text-balance text-5xl font-black leading-tight tracking-[-0.033em] text-primary-foreground drop-shadow-md md:text-6xl">
              Affordable Smart Homes.
              <br />
              Simply Better.
            </h1>
            <h2 className="max-w-2xl text-balance text-lg font-normal leading-relaxed text-primary-foreground/90 drop-shadow-sm md:text-xl">
              Ready-made modular housing solutions built with Light Steel Frame technology. Faster, stronger, and cooler than shipping containers.
            </h2>
            <div className="pt-4">
              <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90">
                <span className="truncate">View Our Models</span>
              </button>
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">The Solo</h3>
                      <p className="text-sm text-muted-foreground">Studio Unit</p>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
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
                      <span className="text-3xl font-black text-accent">$4,900</span>
                      <span className="text-sm font-medium text-muted-foreground">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-accent-foreground shadow-md transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                      View 3D Video
                    </button>
                    <button className="w-full rounded-lg bg-foreground py-3 text-sm font-bold text-background transition-colors hover:bg-primary">
                      Book Now
                    </button>
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

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">The Couple</h3>
                      <p className="text-sm text-muted-foreground">Executive Suite</p>
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
                      <span className="text-3xl font-black text-accent">$7,500</span>
                      <span className="text-sm font-medium text-muted-foreground">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-accent-foreground shadow-md transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                      View 3D Video
                    </button>
                    <button className="w-full rounded-lg bg-foreground py-3 text-sm font-bold text-background shadow-md transition-colors hover:bg-primary">
                      Book Now
                    </button>
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

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">The Family</h3>
                      <p className="text-sm text-muted-foreground">Double Unit</p>
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
                      <span className="text-3xl font-black text-accent">$12,000</span>
                      <span className="text-sm font-medium text-muted-foreground">USD</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-accent-foreground shadow-md transition-colors hover:bg-accent/90">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                      View 3D Video
                    </button>
                    <button className="w-full rounded-lg bg-foreground py-3 text-sm font-bold text-background transition-colors hover:bg-primary">
                      Book Now
                    </button>
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

        {/* Why Choose Section */}
        <section className="bg-card px-4 py-20 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="h-[400px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkx0yOcxMiGnzmrDgVq-3A7VWoB4wrgmuVrA_V1AjzD4WAdIHMZaQtn8xcSc3iQp74CzlG_LYeo7PRTXRUeOa2yoseNFtJxxhesxtebHAw33a7dLEslzuUTplzLBR4yyg5276_shG8b_k-QV05ptNcpGTxChfi05P-Tha0rVL02odiivoG-cDCUJsGTHH7PEZyZx7HiaR1eBXZG8xpYwnQST0YjVK0WMkSgX_HkRkEn4s6q6CEWc_FJFl89IfzVTWmfA7JWrzmDzzT')",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p className="text-lg font-bold text-primary-foreground">Engineering Excellence</p>
                    <p className="text-sm text-primary-foreground/80">Light Steel Frame Technology</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="mb-8 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground">
                  Why choose GoTech?
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-3 text-primary">
                      <span className="material-symbols-outlined">thermostat</span>
                    </div>
                    <h4 className="font-bold text-foreground">Superior Insulation</h4>
                    <p className="text-sm text-muted-foreground">Built for the heat. No oven effect inside your home.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-3 text-primary">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <h4 className="font-bold text-foreground">Incredible Speed</h4>
                    <p className="text-sm text-muted-foreground">Move in within weeks, not months. Save time &amp; money.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-3 text-primary">
                      <span className="material-symbols-outlined">shield</span>
                    </div>
                    <h4 className="font-bold text-foreground">Built to Last</h4>
                    <p className="text-sm text-muted-foreground">Rust-proof galvanized steel frame structure.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-3 text-primary">
                      <span className="material-symbols-outlined">savings</span>
                    </div>
                    <h4 className="font-bold text-foreground">Best Value</h4>
                    <p className="text-sm text-muted-foreground">
                      Unbeatable factory-direct prices starting from $2,900.
                    </p>
                  </div>
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
                Get it on Google Play
              </button>
              <button className="hover-scale rounded-lg border border-primary-foreground/20 bg-foreground px-8 py-3 text-lg font-bold text-background shadow-lg transition-colors hover:bg-foreground/90">
                Download on App Store
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
