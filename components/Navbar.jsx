'use client';

import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import Logo from './Logo';

const navLinks = ['Home', 'Job', 'About Us', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[72px] flex items-center">
        <div className="flex flex-1 items-center min-w-0">
          {/* Logo */}
          <Logo dark size="md" />

          {/* Desktop Nav */}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Sign In
          </a>

          <button
            className="w-[202px] h-[44px] rounded-[10px] bg-white border-[1.5px] border-gray-200 flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
          >
            <LogIn size={16} />
            Create Account
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray transition-colors w-[202px] h-[44px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent px-4 py-4 flex flex-col gap-4">
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
