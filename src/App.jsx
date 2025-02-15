import { BrowserRouter, Route, Routes } from "react-router-dom"

//Pages
import Home from "./Pages/Home/Home"
import Community from './Pages/Community/Community'
import Event from './Pages/Event/Event'
import Contact from './Pages/Contact/Contact'
import ScrollToTop from "./ScrollToTop"

//components
import Navbar from "./components/Navbar/Navbar"
import Form from './components/Form/Form';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>
      <Form/>
    </BrowserRouter>
  )
}

export default App
