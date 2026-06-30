import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import EmployeeAssistance from "@/components/EmployeeAssistance";
import PopularCategories from "@/components/PopularCategories";
import RecentJobs from "@/components/RecentJobs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <EmployeeAssistance />
      <PopularCategories />
      <RecentJobs />
      <Testimonials />
      <CTASection />
      <Footer />  
    </> 
  );
}
