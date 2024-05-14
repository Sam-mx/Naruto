import ButtonGradient from "./assets/svg/ButtonGradient"
import Navigation from "./components/Navigation"

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navigation />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
