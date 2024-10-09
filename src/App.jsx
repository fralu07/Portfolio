import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const App = () => {
  return <div>
    <section className="lg:h-screen" id="Homepage">
      <Sidebar/>
      <Hero/>
    </section>

    {/*<section id="About"><Parallax type="about"/></section>*/}
    <section className="lg:h-screen" id="About"><About/></section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "about",
      xSailing_out_end: "70%",
      xSailing_out_beginn: "80%",
      ySailing_out_end: "15%",
      ySailing_out_beginn: "5%",
      xSun_out_start: "35%",
      xSun_out_end: "20%",
      sunset_start: 0.5,
      sunset_end: 0.4,
    }}/></section>
    <section className="h-screen">Education</section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "education",
      xSailing_out_end: "50%",
      xSailing_out_beginn: "70%",
      ySailing_out_end: "30%",
      ySailing_out_beginn: "10%",
      xSun_out_start: "15%",
      xSun_out_end: "10%",
      sunset_start: 0.4,
      sunset_end: 0.3,
    }}/></section>
    <section className="h-screen">Experience</section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "education",
      xSailing_out_end: "30%",
      xSailing_out_beginn: "50%",
      ySailing_out_end: "30%",
      ySailing_out_beginn: "45%",
      xSun_out_start: "15%",
      xSun_out_end: "0%",
      sunset_start: 0.3,
      sunset_end: 0.2,
    }}/></section>
    <section className="h-screen">Project1</section>
    <section className="h-screen">Project2</section>
    <section className="h-screen">Project3</section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "about",
      xSailing_out_end: "20%",
      xSailing_out_beginn: "25%",
      ySailing_out_end: "35%",
      ySailing_out_beginn: "50%",
      xSun_out_start: "0%",
      xSun_out_end: "-10%",
      sunset_start: 0.2,
      sunset_end: 0.1,
    }}/></section>
    <section className="h-screen" id="Contact">Contact</section>
  </div>;
};

export default App;
