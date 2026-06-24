import { SquareArrowRightEnter, CalendarSearch , FileText, CircleFadingArrowUp , Send } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import Card from './Card'

const steps = [
  {
    icon: SquareArrowRightEnter,
    title: 'Register',
    description:
      'Create your free account in minutes. Tell us about your skills and experience to get started.',
  },
  {
    icon: FileText,
    title: 'Create Resume',
    description:
      'Build a professional resume with our easy-to-use tools. Stand out to employers.',
  },
  {
    icon: CalendarSearch,
    title: 'Find Job',
    description:
      'Browse thousands of listings from top companies. Filter by role, location, and salary.',
  },
  {
    icon: CircleFadingArrowUp,
    title: 'Apply Job',
    description:
      'Submit your application in one click. Track your applications in real time.',
  },
]

export default function HowItWorks() {
  return (
    <section className="p-20 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <SectionHeader
              title="How it works"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            />
          </div>
          <div className="shrink-0">
            <Button variant="outline" size="md" className="mr-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, description }) => (
            <Card key={title} padding="sm">
              <div className="mb-4 w-12 h-12 rounded-[10px] flex items-center align-center justify-center">
                <Icon size={40} className="text-[#13C9A4]" />
              </div>
              <h3 className="font-bold text-[#111111] mb-2 text-lg">{title}</h3>
              <p className="text-[#8a8a8a] text-xs leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
