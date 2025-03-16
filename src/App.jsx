import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Pages
import Home from "./Pages/Home/Home"
import Community from './Pages/Community/Community'
import Event from './Pages/Event/Event'
import Contact from './Pages/Contact/Contact'
import ProtectedSubmissions from './Pages/Submissions/ProtectedSubmissions'
import ScrollToTop from "./ScrollToTop"

//components
import Navbar from "./components/Navbar/Navbar"
import Form from './components/Form/Form';

function App() {


  return (
    <Router>
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/submissions" element={<ProtectedSubmissions/>}/>
      </Routes>
      <Form/>
    </Router>
  )
}

export default App
