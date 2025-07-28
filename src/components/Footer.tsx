import Link from "next/link";
import React from "react";
// import { FaFingerprint } from "react-icons/fa";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* <svg
              viewBox="5 10 85 60"
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g transform="rotate(-12 50 50)">
                <path d="M17 50a33 33 0 0 1 66 0" />
                <path d="M27 50a23 23 0 0 1 46 0" />
                <path d="M37 50a13 13 0 0 1 26 0" />
                <line x1="50" y1="50" x2="88" y2="50" />
              </g>
            </svg> */}

            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          RoleRadar is not affiliated with any company or platform. All logos,
          names, and assets mentioned belong to their respective owners.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Built with care by Jorge Caridad as a personal project to help job
          seekers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
