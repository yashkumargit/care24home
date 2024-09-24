
import './App.css'
import Care24 from './Components/Care24/Care24'
import FAQ from './Components/Faqs/FAQ'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Highlights from './Components/Highlights/Highlights'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import NewsCoverage from './Components/NewsCoverage/NewsCoverage'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
       <Main/>
      <Care24/>
      <Highlights/>
      <NewsCoverage/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
