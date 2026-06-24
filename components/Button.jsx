'use client';

import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer';

  const variants = {
    primary:
      'bg-[#13C9A4] text-white hover:bg-[#0fb892] hover:scale-105 active:scale-95',
    outline:
      'border-2 border-[#13C9A4] text-[#13C9A4] bg-transparent hover:bg-[#13C9A4] hover:text-white hover:scale-105',
    ghost:
      'text-[#111111] bg-transparent hover:text-[#13C9A4] hover:scale-105',
    dark:
      'bg-white text-[#111111] hover:bg-gray-100 hover:scale-105 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}