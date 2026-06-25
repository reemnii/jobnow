export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={`
        bg-white rounded-[28px] border border-[#f2f2f2] shadow-[0_10px_30px_rgba(17,17,17,0.04)]
        ${paddings[padding]}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_16px_36px_rgba(17,17,17,0.07)]' : ''}
        ${className} w-full min-h-[220px]
      `}
    >
      {children}
    </div>
  )
}
