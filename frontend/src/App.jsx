import { Route, Routes } from "react-router-dom"
import { Home, About, Contact, MinifyUrl } from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/minify" element={<MinifyUrl />} />
    </Routes>
  )
}

export default App