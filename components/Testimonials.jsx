'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import PageContainer from './PageContainer'

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
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <PageContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
          <div className="px-4 md:pl-10 max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left">
            <SectionHeader title="People's Feedback about JobNow!" />

            <SectionHeader
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex."
              className="mx-auto max-w-xl lg:mx-0"
            />

            <div className="space-y-6">
              <p className="mx-auto md:max-w-xl text-base font-semibold leading-relaxed text-black lg:mx-0">
                "{t.quote}"
              </p>
              <div className=" md:hidden aspect-square w-full max-w-[484px] rounded-[20px] bg-[#00cc99]" />
              <div className="flex flex-col items-center gap-1 lg:items-start">
                <p className="font-bold text-[#111111] text-lg">{t.name}</p>
                <p className="text-xs text-gray-400">{t.position}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#d2d2d2] text-white transition-colors hover:bg-[#c4c4c4]"
              >
                <ArrowLeft size={18} className="pointer-events-none text-white" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#00cc99] text-white transition-colors hover:bg-[#0fb892]"
              >
                <ArrowRight size={18} className="pointer-events-none" />
              </button>
            </div>
          </div>

          <div className="mx-auto hidden aspect-square w-full max-w-[484px] rounded-[20px] bg-[#00cc99] md:block" />
        </div>
      </PageContainer>
    </section>
  )
}
