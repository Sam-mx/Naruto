import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navigation />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
