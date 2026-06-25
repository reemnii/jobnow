import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import EmployeeAssistance from "@/components/EmployeeAssistance";
import PopularCategories from "@/components/PopularCategories";
import RecentJobs from "@/components/RecentJobs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <EmployeeAssistance />
      <PopularCategories />
      <RecentJobs />
      <Testimonials />
    </> 
  );
}
