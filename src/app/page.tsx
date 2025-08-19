import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import TestimonialsSection from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
        
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <TestimonialsSection /> 
        <Contact /> 
        

    </div>
  )

}
