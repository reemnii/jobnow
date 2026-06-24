'use client';

import Navbar from "./Navbar";
import Image from 'next/image';
import { Search, MapPin, BookSearch, ChartNoAxesColumnIncreasing } from 'lucide-react';


const floatingIcons = [
  {
    Icon: BookSearch,
    className:
      'top-[120px] left-[72px] rotate-[-12deg] opacity-90 animate-[float_5s_ease-in-out_infinite]',
    delay: '0s',
  },
  {
    Icon: ChartNoAxesColumnIncreasing,
    className:
      'top-[200px] right-[60px] rotate-[6deg] opacity-100 animate-[float_6s_ease-in-out_infinite]',
    delay: '0.7s',
  },
  {
    src: '/shield.png',
    className:
      'bottom-[100px] left-[90px] rotate-[-10deg] opacity-95 animate-[float_5.5s_ease-in-out_infinite]',
    delay: '1.2s',
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F5] h-[585px] flex flex-col">
      <Navbar />
      <div className="flex flex-1 h-full">
        {/* Left Side */}
        <div className="flex-1 flex items-center pl-20 pr-16 pt-[72px]">
          <div className="max-w-[560px]">
            <h1 className="text-[42px] font-black text-[#111111] leading-[1.1] tracking-[-1px] mb-5">
              Search, Find, &amp; Apply
            </h1>

            <p className="text-[15px] text-black leading-7 max-w-[594px] mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis lacus non orci euismod vestibulum vitae ut ex. Quisque
              ut arcu at lectus tristique auctor sit amet at turpis.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-[10px] p-4 shadow-lg flex items-center max-w-[651px] max-h-[90px]">
              <div className="flex items-center gap-2 flex-1 bg-[#f2f2f2] rounded-[10px] p-2 ">
                <Search size={17} className="text-black" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-sm text-black bg-transparent placeholder:text-black placeholder:font-medium"
                />
              </div>

              <div className="w-px h-7 bg-[#f9f9f9]]]] mx-3" />

              <div className="flex items-center gap-2  bg-[#f2f2f2] rounded-[10px] p-2 ">
                <MapPin size={17} className="text-black" />
                <select className="outline-none text-sm text-black bg-transparent cursor-pointer">
                  <option>Location</option>
                  <option>Remote</option>
                  <option>New York, NY</option>
                  <option>San Francisco, CA</option>
                </select>
              </div>

              <button className="w-[103px] h-[34px] cursor-pointer ml-3 rounded-[10px] bg-[#00cc99] text-white text-sm font-bold hover:bg-[#00b386] transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[603px] h-full bg-[#00cc99] rounded-bl-[48px] relative overflow-hidden shrink-0">
          {floatingIcons.map(({ Icon, src, className, delay }, i) => (
            <div
              key={i}
              className={`absolute ${className} w-20 h-20 rounded-[11px] bg-white flex items-center justify-center shadow-xl animate-float shadow-[0_25px_60px_rgba(0,0,0,0.28)] transition-transform duration-300`}
              style={{ animationDelay: delay }}
            >
              {Icon ? (
                <Icon size={32} color="#00cc99" />
              ) : (
                <Image
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
