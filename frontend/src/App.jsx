import { Route, Routes } from "react-router-dom"
import { Home, About, Contact, MinifyUrl } from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RedirectToLongURL from "./pages/RedirectToLongURL";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/minify" element={<MinifyUrl />} />
        <Route path="/:miniUrl" element={<RedirectToLongURL />} />
      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Footer />
    </>
  )
}

export default App