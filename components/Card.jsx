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
        bg-white rounded-3xl ${paddings[padding]}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 cursor-pointer' : ''}
        ${className} w-[250px] h-[190px]
      `}
    >
      {children}
    </div>
  )
}
