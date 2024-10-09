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
      xSailing_out_end: "250%",
      xSailing_out_beginn:"350%",
      ySailing_out_end: "5%",
      ySailing_out_beginn: "0%",
      xSun_out_start: "35%",
      xSun_out_end: "20%",
    }}/></section>
    <section className="h-screen">Education</section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "education",
      xSailing_out_end: "200%",
      xSailing_out_beginn:"250%",
      ySailing_out_end: "7%",
      ySailing_out_beginn: "5%",
      xSun_out_start: "25%",
      xSun_out_end: "15%",
    }}/></section>
    <section className="h-screen">Experience</section>
    <section className="lg:h-screen" id="Education"><Parallax p={{
      title: "education",
      xSailing_out_end: "100%",
      xSailing_out_beginn:"200%",
      ySailing_out_end: "10%",
      ySailing_out_beginn: "7%",
      xSun_out_start: "20%",
      xSun_out_end: "0%",
    }}/></section>
    <section className="h-screen">Project1</section>
    <section className="h-screen">Project2</section>
    <section className="h-screen">Project3</section>
    <section className="h-screen" id="Contact">Contact</section>
  </div>;
};

export default App;
