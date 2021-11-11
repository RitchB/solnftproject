import logo from "./logo.svg";
import "./App.css";
import TailwindCSSButton from "./components/Buttons";
import OurTeamSection from "./components/OurTeam";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 py-2">
      <div className="container p-4">
        <h1 className="container p-2 text-center text-9xl font-black font-mouseMemoire">Welcome to the Beaver Lodge</h1>
        <h2 className="container p-2 text-center text-3xl font-mohave">The place where the Slightly Degen Beavers hang out !</h2>
      </div>

      <div className="px-24 py-4">
        <OurTeamSection />
      </div>

      <div className="px-48 py-4">
        <FAQSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
