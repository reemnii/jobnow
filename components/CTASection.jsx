import Button from './Button'
import PageContainer from './PageContainer'

export default function CTASection() {
  return (
    <section className="bg-[#f5f5f5] pb-0">
      <PageContainer className="max-w-[1120px]">
        <div className="md:hidden relative z-10 -mb-16 mx-auto w-full max-w-[500px] bg-[#003a2c] rounded-[20px] py-6 px-5 text-center">
          <h2 className="text-[22px] font-bold text-white mb-3">
            Register your CV now!
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-5 text-[12px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="!border-white !text-white !rounded-[15px] !px-4 !py-2 text-[11px] font-bold hover:!bg-white/10 hover:!text-white"
          >
            Register Now
          </Button>
        </div>

        <div className="hidden md:block relative z-10 -mb-20 bg-[#003a2c] rounded-[20px] py-8 px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Register your CV now!
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="!border-white !text-white !rounded-[15px] font-bold hover:!bg-white/10 hover:!text-white p-2"
          >
            Register Now
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
