import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import LoginSignup from './components/LoginSignup';

function App() {
  
  return (
    <>

     <div className='bg-[#e8f6ff]'>
     <Navbar />
     <Home />
     <About />
     {/* <Services /> */}
     <Team />
     <Contact />
     <LoginSignup />
     </div>
    </>
  )
}

export default App
