"use client";
import React, { useMemo, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const BASIC_COUNT = 8;

const FAQ: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const items = useMemo(
    () => (showAll ? faqs : faqs.slice(0, BASIC_COUNT)),
    [showAll]
  );

  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <p className="hidden lg:block text-foreground-accent">FAQs</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              Frequently Asked Questions
            </h2>
          </SectionTitle>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
            Ask me anything! 
            <br />
            No&mdash; seriously. I read every message. ✨
          </p>

          <a
            href="mailto:support@roleradar.net"
            className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
          >
            support@roleradar.net
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {items.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-secondary" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-secondary" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}

          {faqs.length > BASIC_COUNT && (
            <div className="px-4 pb-6">
              <button
                onClick={() => setShowAll((s) => !s)}
                className="text-secondary font-semibold underline"
                aria-expanded={showAll}
              >
                {showAll ? "Show fewer" : `Show all ${faqs.length} FAQs`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
