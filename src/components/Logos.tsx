import React from "react";

const logos = [
  { name: "Greenhouse", src: "/roleradar-landing/logos/greenhouse.svg" },
  { name: "Ashby",      src: "/roleradar-landing/logos/ashby.svg" },
  { name: "Lever",      src: "/roleradar-landing/logos/lever.svg" },
] as const;

const Logos: React.FC = () => (
  <section id="logos" className="py-32 px-5 bg-background">
    <p className="text-lg font-medium text-center">
      Made possible by the public facing API&apos;s from these amazing companies
    </p>

    <div className="mt-5 w-full flex flex-wrap items-center justify-evenly gap-5 sm:gap-10 logos-container">
      {logos.map(({ name, src }) => (
        <img
          key={name}
          src={src}
          alt={`${name} logo`}
          className="h-12 w-auto"
          loading="lazy"
        />
      ))}
    </div>
  </section>
);

export default Logos;
