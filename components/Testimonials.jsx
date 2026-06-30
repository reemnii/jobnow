'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="px-4 py-12 md:p-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="text-md">
              <SectionHeader title="People's Feedback about JobNow!" />
            </div>

            <SectionHeader
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex."
              className="text-sm ml-4 md:ml-0 w-[400px] md:w-[480px] h-[45px]"
            />

            <div className="space-y-6">
              <p className="mx-auto  text-black leading-relaxed font-semibold text-md transition-all duration-300 md:mx-0 md:max-w-none w-[450px] h-[38px] mb-15">
                "{t.quote}"
              </p>
              <div className="mx-auto h-[320px] w-full max-w-[470px] rounded-[24px] bg-[#00cc99] md:hidden" />
              <div className=' mt-25'>
                <p className="font-bold text-[#111111] text-lg ">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.position}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 cursor-pointer rounded-full text-white bg-[#d2d2d2] flex items-center justify-center hover:bg-[#c4c4c4] transition-colors"
              >
                <ArrowLeft size={18} className="pointer-events-none text-white" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 cursor-pointer rounded-full bg-[#00cc99] text-white flex  items-center justify-center hover:bg-[#0fb892] transition-colors"
              >
                <ArrowRight size={18} className="pointer-events-none" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex mx-auto mt-8 lg:mt-0 rounded-[20px] w-[250px] h-[250px] md:w-[484px] md:h-[474px] overflow-hidden bg-[#00cc99] aspect-square items-center justify-center lg:mx-10" />
        </div>
      </div>
    </section>
  )
}
