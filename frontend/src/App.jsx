import { Route, Routes } from "react-router-dom"
import { Home, About, Contact, MinifyUrl } from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/minify" element={<MinifyUrl />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App