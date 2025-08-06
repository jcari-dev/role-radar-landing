'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-background p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {children}

        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl leading-none hover:opacity-70"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}
