import React from "react";
import DownloadButton from "./DownloadButton";
import { FaWindows } from "react-icons/fa";
import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]" />

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
          <span className="block">{heroDetails.headingLine1}</span>
          <span className="block">{heroDetails.headingLine2}</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-foreground whitespace-pre-line">
          {heroDetails.subheading.split("\n").map((line, i) => (
            <span key={i} className={i ? "block" : undefined}>
              {line}
            </span>
          ))}
        </p>

        <div className="mt-8">
          <DownloadButton
            downloadLink="/downloads/RoleRadarSetup.exe"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-primary/90 focus-visible:ring focus-visible:ring-primary/50"
          >
            <FaWindows className="h-5 w-5" aria-hidden="true" />
            Download for Windows
          </DownloadButton>
        </div>

        <div
          className="relative mt-12 md:mt-16 mx-auto w-full max-w-[384px] aspect-[4/1] md:aspect-[384/200] z-10 aria-hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
