import ButtonGradient from "./assets/svg/ButtonGradient";
import BackToTopButton from "./components/BackToTop";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Teamseven from "./components/Teamseven/Teamseven";
import Teamthree from "./components/Teamthree/Teamthree";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navigation />
        <Hero />
        <Teamseven />
        <Teamthree />
      </div>
      <BackToTopButton />
      <ButtonGradient />
    </>
  );
};

export default App;
