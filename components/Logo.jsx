export default function Logo({ dark = false, size = 'md' }) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <span className={`font-extrabold whitespace-nowrap ${sizes[size]}`}>
      <span className={'text-[#111111]' }>
        Job
      </span>
      <span
        className={`inline-flex items-center ${
          dark ? 'text-white' : 'text-[#00cc99]'
        }`}
      >
        N
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="mx-[0.05em] h-[0.85em] w-[0.85em] shrink-0 align-middle"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4 4" />
        </svg>
        w
      </span>
    </span>
  );
}
