import React from "react";
import Image from "next/image";
import Link from "next/link";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      {/* background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      {/* subtle bottom‑fade */}
      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]" />

      {/* main content */}
      <div className="text-center">
        {/* headline split in two lines */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
          <span className="block">{heroDetails.headingLine1}</span>
          <span className="block">{heroDetails.headingLine2}</span>
        </h1>

        {/* sub‑headline */}
        <p className="mt-4 max-w-2xl mx-auto text-foreground whitespace-pre-line">
          {heroDetails.subheading.split("\n").map((line, i) => (
            <span key={i} className={i ? "block" : undefined}>
              {line}
            </span>
          ))}
        </p>

        {/* single Windows download button */}
        <div className="mt-8">
          <Link
            href="/downloads/RoleRadarSetup.exe" // adjust path or MS‑Store link
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-primary/90 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="9" height="9" />
              <rect x="13" y="3" width="9" height="9" />
              <rect x="2" y="13" width="9" height="9" />
              <rect x="13" y="13" width="9" height="9" />
            </svg>
            Download for Windows
          </Link>
        </div>

        {/* mockup image */}
        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
