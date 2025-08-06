import { ctaDetails } from "@/data/cta";
import DownloadButton from "./DownloadButton";
import { FaWindows } from "react-icons/fa";

const CTA: React.FC = () => (
  <div>
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div
            className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02]
                        bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),
                            linear-gradient(to_bottom,#12170f_1px,transparent_1px)]
                        bg-[size:6rem_4rem]"
          >
            <div
              className="rounded-3xl absolute inset-0
                          bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"
            />
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            {/* respect the line‑break if you ever add one */}
            <p className="mx-auto max-w-xl md:px-5 whitespace-pre-line">
              {ctaDetails.subheading}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="cta" className="my-20">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to try RoleRadar?
        </h2>
        <p className="mt-4 text-base opacity-80">
          Track roles the easy way and never miss an opportunity.
        </p>

        <DownloadButton
          downloadLink="/downloads/RoleRadarSetup.exe"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-primary/90 focus-visible:ring focus-visible:ring-primary/50"
        >
          <FaWindows className="h-5 w-5" aria-hidden="true" />
          Download for Windows
        </DownloadButton>
      </div>
    </section>
  </div>
);

export default CTA;
