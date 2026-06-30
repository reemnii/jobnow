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
    <div className="bg-white rounded-3xl p-6 max-w-[300px] md:max-w-[446px] max-h-[510px] transition-all duration-300 hover:-translate-y-2">
      {/* Logo */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt || `${company} logo`}
            width={93}
            height={93}
            className={logoImageClass}
          />
        ) : (
          <span className="text-2xl font-bold" style={{ color: textColor }}>
            {company?.[0]}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[#111111] text-lg w-[219px] h-22px] mb-1">{title}</h3>
      <p className="text-[#8a8a8a] text-xs font-semibold mb-6">{company}</p>
      <p className="text-[#8a8a8a] mb-8  text-xs w-[300px] md:w-[363px] h-[77px] font-medium leading-relaxed pr-9 line-clamp-3">{description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
        <span className="flex items-center gap-1 text-black bg-[#f9f9f9] rounded-[10px] p-2">
          <MapPin size={14} className="text-black" />
          {location}
        </span>
        <span className="flex items-center gap-1 text-black bg-[#f9f9f9] rounded-[10px] p-2">
          <BriefcaseBusiness size={14} className="text-black" />
          {type}
        </span>
      </div>

      {/* Apply */}
      <a
        href="#"
        className="flex items-center gap-1 text-[#00cc99] font-semibold text-md hover:gap-2 transition-all mb-4 mt-10"
      >
        Apply Now
        <ArrowRight size={14} />
      </a>
    </div>
  )
}
