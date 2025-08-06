"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Modal from "./Modal";
import clsx from "clsx";

type Mode = "download" | "request";

interface DownloadButtonProps {
  downloadLink?: string;
  mode?: Mode;
  className?: string;
  children?: ReactNode;
  label?: string;
  requestEmail?: string;
}

export default function DownloadButton({
  downloadLink,
  mode = "request",
  className = "",
  children,
  label,
  requestEmail = "support@roleradar.net",
}: DownloadButtonProps) {
  const [open, setOpen] = useState(false);

  const buttonLabel =
    label ?? (mode === "download" ? "Download for Windows" : "Request a demo");

  const subject = encodeURIComponent("RoleRadar demo request");
  const body = encodeURIComponent(
    `Hi Jorge,

I would love a short demo.

What I want to see:
Preferred format: live call or recorded video
Availability:

Thanks!`
  );
  const mailto = `mailto:${requestEmail}?subject=${subject}&body=${body}`;

  return (
    <>
      <button onClick={() => setOpen(true)} className={clsx(className)}>
        {children ?? buttonLabel}
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        {mode === "download" ? (
          <div>
            <p className="mt-2 text-sm leading-6 text-center">
              RoleRadar is an early alpha. You might see bugs or data loss and
              there is no warranty. Keep backups and use at your own risk.
              Notice anything odd? Email{" "}
              <a href={`mailto:${requestEmail}`} className="underline">
                {requestEmail}
              </a>
              . By clicking <strong>Accept</strong> you agree to the{" "}
              <Link href="/terms" className="underline">
                Terms of Use
              </Link>
              .
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href={downloadLink}
                download
                className="rounded-lg bg-secondary px-4 py-2 text-white hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                Accept & Download
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-foreground/20 px-4 py-2 hover:bg-foreground/5"
              >
                I&apos;ll think about it
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold text-center">
              Request a demo
            </h3>
            <p className="mt-2 text-sm leading-6 text-center">
              RoleRadar is in private beta. No public download yet, but a
              release is coming soon! Email me for a walkthrough and I will send
              a short video or set up a quick call. Clicking below opens your
              email app with a template.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href={mailto}
                className="rounded-lg bg-secondary px-4 py-2 text-white hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                Open email app
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-foreground/20 px-4 py-2 hover:bg-foreground/5"
              >
                Cancel
              </button>
            </div>

            <p className="mt-4 text-xs text-center opacity-80">
              Or email {requestEmail} with the subject “RoleRadar demo request.”
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
