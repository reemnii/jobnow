import Image from 'next/image'
import { BriefcaseBusiness, MapPin, Clock, ArrowRight } from 'lucide-react'
export default function JobCard({
  logoSrc,
  logoAlt,
  title,
  company,
  description,
  location,
  type,
  bgColor,
  textColor,
}) {
  const logoImageClass =
    logoSrc === '/react.png' ? 'h-full w-full object-cover scale-[1.2] origin-center' : 'h-full w-full object-cover'

  return (
    <div className="bg-white rounded-3xl p-6 w-[336px] h-[350px] transition-all duration-300 hover:-translate-y-2">
      {/* Logo */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt || `${company} logo`}
            width={56}
            height={56}
            className={logoImageClass}
          />
        ) : (
          <span className="text-2xl font-bold" style={{ color: textColor }}>
            {company?.[0]}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[#111111] text-lg mb-1">{title}</h3>
      <p className="text-[#8a8a8a] text-sm font-medium mb-3">{company}</p>
      <p className="text-[#8a8a8a] text-xs font-light leading-relaxed mb-4 line-clamp-3">{description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
        <span className="flex items-center gap-1 text-black bg-[#f9f9f9] rounded-[10px] p-2">
          <MapPin size={12} className="text-black" />
          {location}
        </span>
        <span className="flex items-center gap-1 text-black bg-[#f9f9f9] rounded-[10px] p-2">
          <BriefcaseBusiness size={12} className="text-black" />
          {type}
        </span>
      </div>

      {/* Apply */}
      <a
        href="#"
        className="flex items-center gap-1 text-[#00cc99] font-semibold text-sm hover:gap-2 transition-all"
      >
        Apply Now
        <ArrowRight size={14} />
      </a>
    </div>
  )
}
