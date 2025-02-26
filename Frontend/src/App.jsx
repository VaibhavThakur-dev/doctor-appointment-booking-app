import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Signup from './components/Signup';
import AppointmentForm from './components/AppointmentForm';
import {BrowserRouter, Route, Routes } from 'react-router';
import Footer from './components/Footer';


function App() {
  
  return (
    <>

     <div className='bg-[#e8f6ff]'>
      <BrowserRouter>
     <Navbar />
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/about' element = {<About />}/>
            <Route path='/services' element = {<Services />}/>
            <Route path='/team' element = {<Team />}/>
            <Route path='/contact' element = {<Contact />}/>
            <Route path='/log-In' element = {<Signup />}/>
            <Route path='/book-appointment' element = {<AppointmentForm />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
