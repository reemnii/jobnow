import SectionHeader from './SectionHeader'
import JobCard from './JobCard'
import Button from './Button'
import PageContainer from './PageContainer'

const jobs = [
  {
    logoSrc: '/ds.png',
    logoAlt: 'Dimension Studio logo',
    title: 'UI/UX Designer',
    company: 'Dimension Studio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
  {
    logoSrc: '/alpander.png',
    logoAlt: 'Alpander logo',
    title: 'Full Stack Developer',
    company: 'Alpander',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
  {
    logoSrc: '/react.png',
    logoAlt: 'XReact Tech logo',
    title: 'Product Designer',
    company: 'XReact Tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.Quisque ut arcu at lectus tristique auctor sit amet at turpis.',
    location: 'San Francisco, CA',
    type: 'Full Time',
  },
]

export default function RecentJobs() {
  return (
    <section className="bg-[#fbfbfb] py-16 md:py-24">
      <PageContainer>
        <div className="mb-12 text-center">
          <SectionHeader
            title="Recently Added Jobs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."
            centered
          />
        </div>

        <div
          className="md:hidden overflow-x-auto scrollbar-hide"
          style={{ marginRight: 'calc(50% - 50vw)' }}
        >
          <div className="flex gap-4 pb-4 pr-6">
            {jobs.map((job) => (
              <div key={job.title} className="flex-none">
                <JobCard {...job} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="md">
            View More
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
