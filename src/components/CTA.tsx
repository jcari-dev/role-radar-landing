import { ctaDetails } from '@/data/cta';

const CTA: React.FC = () => (
  <section id="cta" className="mt-10 mb-5 lg:my-20">
    <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
      <div className="h-full w-full">
        {/* background grid + radial glow */}
        <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02]
                        bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),
                            linear-gradient(to_bottom,#12170f_1px,transparent_1px)]
                        bg-[size:6rem_4rem]">
          <div className="rounded-3xl absolute inset-0
                          bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]" />
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
);

export default CTA;
