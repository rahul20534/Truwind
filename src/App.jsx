import { BrowserRouter, Route, Routes } from "react-router-dom"

//Pages
import Home from "./Pages/Home/Home"

//components
import Navbar from "./components/Navbar/Navbar"

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
