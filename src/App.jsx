import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import "./App.css"
import Contact from './pages/Contact';
import Footer from './component/Footer';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import { Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/skill' element={<Skill/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
      {/* <Route path='/projects' element={<Projects/>}/> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
