import SectionHeader from './SectionHeader'
import JobCard from './JobCard'
import Button from './Button'

const jobs = [
  {
    logoSrc: '/ds.png',
    logoAlt: 'Dimension Studio logo',
    title: 'UI/UX Designer',
    company: 'Dimension Studio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
  {
    logoSrc: '/alpander.png',
    logoAlt: 'Alpander logo',
    title: 'Full Stack Developer',
    company: 'Alpander',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
  {
    logoSrc: '/react.png',
    logoAlt: 'XReact Tech logo',
    title: 'Product Designer',
    company: 'XReact Tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
]

export default function RecentJobs() {
  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeader
            title="Recently Added Jobs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            centered
          />
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {jobs.map((job) => (
            <div key={job.title} className="flex-none">
              <JobCard {...job} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
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
