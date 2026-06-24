export default function SectionHeader({
  title,
  description,
  centered = false,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
