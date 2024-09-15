import { BrowserRouter, Route, Routes } from "react-router-dom"

//Pages
import Home from "./Pages/Home/Home"

//components
import Navbar from "./components/Navbar/Navbar"
import Form from './components/Form/Form';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Form></Form>
    </BrowserRouter>
  )
}

export default App
