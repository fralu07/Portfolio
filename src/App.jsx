import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Hobbies from "./components/hobbies/Hobbies.jsx";
import Skills from "./components/skills/Skills.jsx";
import WhyMe from "./components/whyMe/WhyMe.jsx";
import ParallaxOnlyTitle from "./components/parallax/ParallaxOnlyTitle.jsx";
import WhyMeSolution from "./components/whyMe/WhyMeSolution.jsx";
import Intro from "./components/intro/Intro.jsx";
import ParallaxEnd from "./components/parallax/ParallaxEnd.jsx";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section className="h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d]"><Intro/></section>
    <section className="lg:h-screen" id="About"><Parallax p={{
      title: "Über mich",
      xSailing_out_end: "70%",
      xSailing_out_beginn: "80%",
      ySailing_out_end: "15%",
      ySailing_out_beginn: "5%",
      xSun_out_start: "35%",
      xSun_out_end: "20%",
      sunset_start: 0.5,
      sunset_end: 0.4,
    }}/></section>
    <section className="lg:h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><About/></section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "Ausbildung",
      xSailing_out_end: "50%",
      xSailing_out_beginn: "70%",
      ySailing_out_end: "30%",
      ySailing_out_beginn: "10%",
      xSun_out_start: "15%",
      xSun_out_end: "10%",
      sunset_start: 0.4,
      sunset_end: 0.3,
    }}/></section>
    <section className="h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><Education/></section>
    <section className="lg:h-screen large" id="Experience"><Parallax p={{
      title: "Berufserfahrung",
      xSailing_out_end: "30%",
      xSailing_out_beginn: "50%",
      ySailing_out_end: "30%",
      ySailing_out_beginn: "45%",
      xSun_out_start: "15%",
      xSun_out_end: "0%",
      sunset_start: 0.3,
      sunset_end: 0.2,
    }}/></section>
    <section className="h-[1440] bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><Experience/></section>
    <section className="lg:h-screen" id="Projects"><Parallax p={{
      title: "Projekte",
      xSailing_out_end: "20%",
      xSailing_out_beginn: "25%",
      ySailing_out_end: "35%",
      ySailing_out_beginn: "50%",
      xSun_out_start: "0%",
      xSun_out_end: "-10%",
      sunset_start: 0.2,
      sunset_end: 0.1,
    }}/></section>
    <section className="h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><Projects/></section>
    <section className="lg:h-screen" id="Hobbies"><Parallax p={{
      title: "Hobbys",
      xSailing_out_end: "15%",
      xSailing_out_beginn: "25%",
      ySailing_out_end: "45%",
      ySailing_out_beginn: "65%",
      xSun_out_start: "-10%",
      xSun_out_end: "-20%",
      sunset_start: 0.2,
      sunset_end: 0.1,
    }}/></section>
    <section className="h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><Hobbies/></section>
    <section className="lg:h-screen" id="Skills"><Parallax p={{
      title: "Skills",
      xSailing_out_end: "10%",
      xSailing_out_beginn: "15%",
      ySailing_out_end: "55%",
      ySailing_out_beginn: "75%",
      xSun_out_start: "-20%",
      xSun_out_end: "-30%",
      sunset_start: 0.2,
      sunset_end: 0.1,
    }}/></section>
    <section className="h-[210vh] md:h-[160vh] xl:[140vh] bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><Skills/></section>
    <section className="lg:h-[50] bg-gradient-to-b from-[#111132] to-[#0c0c1d]" id="Why me"><ParallaxOnlyTitle p={{
      title: "Warum mich?",
    }}/></section>

    <section className="h-[200vh] bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Why me"><WhyMe/></section>
    <section className="h-[100vh] bg-gradient-to-b from-[#0c0c1d] to-[#111132]"><WhyMeSolution/></section>

  </div>;
};

export default App;
