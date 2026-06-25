'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from './SectionHeader'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.',
    name: 'Brown Garcia',
    position: 'Full Stack Developer at XReact Tech',
  },
  {
    quote:
      'Quisque ut arcu at lectus tristique auctor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae.',
    name: 'Sarah Chen',
    position: 'Product Manager at Alepander',
  },
  {
    quote:
      'Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit at turpis.',
    name: 'Marcus Williams',
    position: 'UI/UX Designer at Dimension Studio',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="p-10 md:p-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – Testimonial */}
          <div className="space-y-8">
            <div className="text-md">
            <SectionHeader title="People's Feedback about JobNow!"/> </div>
            <SectionHeader description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex." className="text-sm"/>
            <div className="space-y-6">
              <p className="text-black leading-relaxed font-semibold text-md transition-all duration-300">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-[#111111] text-lg">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.position}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-[#d2d2d2] flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#00cc99] text-white flex items-center justify-center hover:bg-[#0fb892] transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right – Image */}
          <div className="rounded-[20px] w-[380px] h-[360px] overflow-hidden bg-[#00cc99] aspect-square flex items-center justify-center ml-4 md:ml-20 ">
          </div>
        </div>
      </div>
    </section>
  )
}
