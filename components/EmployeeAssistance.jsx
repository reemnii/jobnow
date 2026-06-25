import Button from './Button'

export default function EmployeeAssistance() {
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5] ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – Image placeholder */}
          <div className="h-[285px] h-[210px] md:w-[504px] md:h-[371px] rounded-[20px] overflow-hidden bg-[#c4c4c4] flex items-center justify-center md:ml-15">
            
          </div>

          {/* Right – Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#111111] leading-tight text-center md:text-left">
              We will help you become an employee in your dream company
            </h2>
            <p className="text-[#8a8a8a] leading-relaxed text-center md:text-left">
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
      </div>
    </section>
  )
}
