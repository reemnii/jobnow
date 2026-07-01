import { SquareArrowRightEnter, CalendarSearch , FileText, CircleFadingArrowUp , Send } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import Card from './Card'
import PageContainer from './PageContainer'

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
    <section className="bg-[#fbfbfb] pt-60 pb-20 md:py-24">
      <PageContainer>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <SectionHeader
              title="How it works"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            />
          </div>
          <div className="hidden shrink-0 md:block">
            <Button variant="outline" size="md" className="mr-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }) => (
            <Card key={title} padding="sm" className="min-h-[220px] md:min-h-[240px] lg:min-h-[220px]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px]">
                <Icon size={40} className="text-[#00cc99]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#111111]">{title}</h3>
              <p className="text-[#8a8a8a] text-xs md:text-sm leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" size="md">
            Learn More
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
