import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Hobbies from "./components/hobbies/Hobbies.jsx";
import Skills from "./components/skills/Skills.jsx";
import WhyMe from "./components/whyMe/WhyMe.jsx";
import ParallaxOnlyTitle from "./components/parallax/ParallaxOnlyTitle.jsx";
import WhyMeSolution from "./components/whyMe/WhyMeSolution.jsx";
import Intro from "./components/intro/Intro.jsx";
import { Analytics } from '@vercel/analytics/next';

const App = () => {
  return <div className="">
    <Analytics />
    <section id="Startseite">
      <Navbar/>
      <Hero/>
    </section>

    {/*<section className="lg:h-screen overflow-x-hidden bg-gradient-to-b from-[#111132] to-[#0c0c1d]" id="Intro"><Intro/>*/}
    {/*</section>*/}
    <section className="lg:h-screen overflow-x-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Über mich"><About/></section>
    {/*<section className="lg:h-screenoverflow-x-hidden " id="Ausbildung"><Parallax p={{*/}
    {/*  title: "Ausbildung",*/}
    {/*  xSailing_out_end: "60%",*/}
    {/*  xSailing_out_beginn: "70%",*/}
    {/*  ySailing_out_end: "30%",*/}
    {/*  ySailing_out_beginn: "10%",*/}
    {/*  xSun_out_start: "15%",*/}
    {/*  xSun_out_end: "10%",*/}
    {/*  sunset_start: 0.4,*/}
    {/*  sunset_end: 0.3,*/}
    {/*  picture: "fhnw_innen.jpeg",*/}
    {/*  textColor: "text-black"*/}
    {/*}}/></section>*/}
    <section className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Ausbildung">
      <Education/></section>
    {/*<section className="lg:h-screen overflow-x-hidden " id="Berufserfahrung"><Parallax p={{*/}
    {/*  title: "Berufserfahrung",*/}
    {/*  xSailing_out_end: "50%",*/}
    {/*  xSailing_out_beginn: "60%",*/}
    {/*  ySailing_out_end: "30%",*/}
    {/*  ySailing_out_beginn: "45%",*/}
    {/*  xSun_out_start: "15%",*/}
    {/*  xSun_out_end: "0%",*/}
    {/*  sunset_start: 0.3,*/}
    {/*  sunset_end: 0.2,*/}
    {/*  picture: "rackandservers.jpg",*/}
    {/*  textColor: "text-white"*/}
    {/*}}/></section>*/}
    <section
        className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Berufserfahrung">
      <Experience/></section>
    {/*<section className="lg:h-screenoverflow-x-hidden " id="Projekte"><Parallax p={{*/}
    {/*  title: "Projekte",*/}
    {/*  xSailing_out_end: "40%",*/}
    {/*  xSailing_out_beginn: "50%",*/}
    {/*  ySailing_out_end: "35%",*/}
    {/*  ySailing_out_beginn: "50%",*/}
    {/*  xSun_out_start: "0%",*/}
    {/*  xSun_out_end: "-10%",*/}
    {/*  sunset_start: 0.2,*/}
    {/*  sunset_end: 0.1,*/}
    {/*  picture: "coding_2.jpeg",*/}
    {/*  textColor: "text-white"*/}
    {/*}}/></section>*/}
    <section
        className="overflow-x-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] " id="Projekte">
      <Projects/></section>
    {/*<section className="lg:h-screenoverflow-x-hidden " id="Skills"><Parallax p={{*/}
    {/*  title: "Skills",*/}
    {/*  xSailing_out_end: "30%",*/}
    {/*  xSailing_out_beginn: "40%",*/}
    {/*  ySailing_out_end: "45%",*/}
    {/*  ySailing_out_beginn: "65%",*/}
    {/*  xSun_out_start: "-10%",*/}
    {/*  xSun_out_end: "-20%",*/}
    {/*  sunset_start: 0.2,*/}
    {/*  sunset_end: 0.1,*/}
    {/*}}/></section>*/}
    <section className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Skills"><Skills/>
    </section>
    {/*<section className="lg:h-screenoverflow-x-hidden " id="Hobbys"><Parallax p={{*/}
    {/*  title: "Hobbys",*/}
    {/*  xSailing_out_end: "20%",*/}
    {/*  xSailing_out_beginn: "30%",*/}
    {/*  ySailing_out_end: "55%",*/}
    {/*  ySailing_out_beginn: "75%",*/}
    {/*  xSun_out_start: "-20%",*/}
    {/*  xSun_out_end: "-30%",*/}
    {/*  sunset_start: 0.2,*/}
    {/*  sunset_end: 0.1,*/}

    {/*}}/></section>*/}
    <section
        className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Hobbys">
      <Hobbies/></section>

    <section className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]" id="Warum mich"><WhyMe/>
    </section>

  </div>;
};

export default App;
