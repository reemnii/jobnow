'use client'

import { useState } from 'react'
import { Brain, Palette, ChartLine, Landmark, ClockFading, LoaderCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Button from './Button'

const categories = [
  { icon: Brain, title: 'Design and Development', vacancies: 234 },
  { icon: ChartLine, title: 'Accounting and Finance', vacancies: 189 },
  { icon: Landmark, title: 'Bank Institution', vacancies: 156 },
  { icon: ClockFading, title: 'Product Management', vacancies: 302 },
  { icon: LoaderCircle, title: 'Customer Service', vacancies: 198 },
]

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-[#d6f4ec]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeader
            title="Popular Job Categories"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            centered
          />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-15 scrollbar-hide ">
          {categories.map(({ icon: Icon, title, vacancies }, idx) => (
            <button
              key={title}
              onClick={() => setActiveIndex(idx)}
              className={`
                flex-shrink-0 rounded-3xl p-6 text-left w-48 transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg w-[250px] h-[175px]
                ${activeIndex === idx
                  ? 'bg-[#00cc99] text-white shadow-lg shadow-[#00cc99]/30'
                  : 'bg-white text-[#111111] hover:shadow-md'}
              `}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4
                }`}
              >
                <Icon
                  size={40}
                  className={activeIndex === idx ? 'text-white' : 'text-[#00cc99]'}
                />
              </div>
              <h3 className="font-bold text-lg leading-snug mb-2">{title}</h3>
              <p
                className={`text-xs ${
                  activeIndex === idx ? 'text-white/80' : 'text-gray-400'
                }`}
              >
                {vacancies} Job Vacancy
              </p>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="md">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}
