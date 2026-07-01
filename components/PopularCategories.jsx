'use client'

import { useState } from 'react'
import { Brain, Palette, ChartLine, Landmark, ClockFading, LoaderCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import PageContainer from './PageContainer'

const categories = [
  { icon: Brain, title: 'Design and Development', vacancies: 234 },
  { icon: ChartLine, title: 'Accounting and Finance', vacancies: 189 },
  { icon: Landmark, title: 'Bank\nInstitution', vacancies: 156 },
  { icon: ClockFading, title: 'Product Management', vacancies: 302 },
  { icon: LoaderCircle, title: 'Customer Service', vacancies: 198 },
]

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-[#F2FCFA] py-16 md:py-24">
      <PageContainer>
        <div className="mb-12 text-center">
          <SectionHeader
            title="Popular Job Categories"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            centered
          />
        </div>

        <div
          className="overflow-x-auto scrollbar-hide"
          style={{ marginRight: 'calc(50% - 50vw)' }}
        >
          <div className="flex gap-4 pb-4 pr-6 md:pr-8">
            {categories.map(({ icon: Icon, title, vacancies }, idx) => (
              <button
                key={title}
                onClick={() => setActiveIndex(idx)}
                className={`
                  flex-shrink-0 rounded-3xl cursor-pointer p-6 text-left transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg w-[250px] h-[200px] md:w-[285px] md:h-[248px] whitespace-pre-line
                  ${activeIndex === idx
                    ? 'bg-[#00cc99] text-white shadow-lg shadow-[#00cc99]/30'
                    : 'bg-white text-[#111111] hover:shadow-md'}
                `}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon
                    size={42}
                    className={activeIndex === idx ? 'text-white' : 'text-[#00cc99]'}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-snug">{title}</h3>
                <p
                  className={`mt-5 md:mt-10 text-xs ${
                    activeIndex === idx ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {vacancies} Job Vacancy
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="md">
            View More
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
