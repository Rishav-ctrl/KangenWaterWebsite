import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import ScienceSection from '@/components/ ScienceSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhereToBuySection from '@/components/ WhereToBuySection';
import About from '@/components/About';


export default function Page() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <ScienceSection />
      <BenefitsSection />
      <WhereToBuySection />
      
    </div>
  );
}