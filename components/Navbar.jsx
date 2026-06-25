'use client';

import { useState } from 'react';
import { X, LogIn } from 'lucide-react';
import Logo from './Logo';

const navLinks = ['Home', 'Job', 'About Us', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[72px] flex items-center">
        <div className="hidden md:flex flex-1 items-center min-w-0">
          <Logo dark size="md" className="cursor-pointer" />

          <ul className="hidden md:flex items-center gap-10 ml-16">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-bold text-[#111111] hover:text-[#00cc99] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0 ml-auto">
          <a
            href="#"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Sign In
          </a>

          <button className="w-[202px] h-[44px] rounded-[10px] bg-white border-[1.5px] border-gray-200 flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors">
            <LogIn size={16} />
            Create Account
          </button>
        </div>

        <div className="relative flex w-full items-center justify-end md:hidden">
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo dark size="md" />
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex cursor-pointer h-[29px] w-[36px] items-center justify-center rounded-[6px] bg-[#00cc99] text-white transition-colors hover:bg-[#00b588]"
          >
            {isOpen ? (
              <X size={22} strokeWidth={2.5} />
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16" />
                <path d="M9 12h10" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f2f2f2] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[#111111] hover:text-[#00cc99] transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}

          <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
            <a
              href="#"
              className="text-sm font-semibold text-[#00cc99] py-1"
            >
              Sign In
            </a>

            <button
              className="h-11 rounded-[10px] bg-white border-[1.5px] border-gray-200 flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
            >
              <LogIn size={16} />
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
