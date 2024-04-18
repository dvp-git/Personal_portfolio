import { BrowserRouter  } from "react-router-dom"

import { About ,Resume, Contact, Experience, Feedbacks, Hero, Navbar, Tech , Projects , StarsCanvas, Certifications } from './components'

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-center bg-cover bg-no-repeat">
            <Navbar/>
            <Hero/> 
       </div>
        <About/>
        <Experience />
        <Projects />
        <Tech />
        <Certifications />
        <Resume/>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>    
    </BrowserRouter>
  )
}

export default App
