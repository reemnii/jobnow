import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Logo from './Logo'
import PageContainer from './PageContainer'

const pages = ['Home', 'Booking', 'Facilities', 'About Us', 'Location', 'Contact']

const socialIcons = [
  { icon: FaGoogle, label: 'Google' },
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
]

function FooterDesktop() {
  return (
    <div className="hidden md:block">
      <PageContainer className="py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:gap-10">
          <div className="max-w-[330px]">
            <div className="mb-6">
              <Logo dark size="lg" />
            </div>
            <p className="text-[14px] leading-7 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold leading-none text-white">
              Company
            </h4>
            <div className="text-[15px] leading-7 font-light text-white/90">
              <p>Address : 123 Fifth Avenue, New York - 1060, USA.</p>
              <p>Call Us : +(1600) 456 7890</p>
              <p>Email : yourid@example.com</p>
              <p>Mon Sat : 9:00 AM - 19:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold leading-none text-white">
              Pages
            </h4>
            <ul className="text-[15px] leading-7 text-white/90">
              {pages.map((page) => (
                <li key={page} className="flex items-center gap-2">
                  <span className="text-[18px] leading-none ">&rsaquo;</span>
                  <a href="#" className="hover:text-gray-300 transition-colors hover:transition-x-1">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold leading-none text-white">
              Contact Us
            </h4>
            <div className="flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

function FooterMobile() {
  return (
    <div className="md:hidden">
      <PageContainer className="py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <div className="col-span-2 max-w-[330px]">
            <div className="mb-5">
              <Logo dark size="lg" />
            </div>
            <p className="text-[13px] leading-6 text-white/90 max-w-[330px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-extrabold leading-none text-white">
              Company
            </h4>
            <div className="text-[12px] leading-6 font-light text-white/90">
              <p>Address : 123 Fifth Avenue, New York - 1060, USA.</p>
              <p>Call Us : +(1600) 456 7890</p>
              <p>Email : yourid@example.com</p>
              <p>Mon Sat : 9:00 AM - 19:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-extrabold leading-none text-white">
              Pages
            </h4>
            <ul className="text-[12px] leading-6 text-white/90">
              {pages.map((page) => (
                <li key={page} className="flex items-center gap-2">
                  <span className="text-[16px] leading-none">&rsaquo;</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="mb-3 text-[18px] font-extrabold leading-none text-white">
              Contact Us
            </h4>
            <div className="flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#08c9a3] text-white pt-16 md:pt-20">
      <FooterDesktop />
      <FooterMobile />
    </footer>
  )
}
