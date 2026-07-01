import Button from './Button'
import PageContainer from './PageContainer'

export default function EmployeeAssistance() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <PageContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto aspect-[504/371] w-full max-w-[504px] rounded-[20px] bg-[#c4c4c4]" />

          <div className="space-y-6 p-6">
            <h2 className="text-center text-xl font-bold leading-tight text-[#111111] md:text-left md:text-4xl">
              We will help you become an employee in your dream company
            </h2>
            <p className="text-center text-sm leading-relaxed text-[#8a8a8a] md:text-left md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="outline" size="md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
