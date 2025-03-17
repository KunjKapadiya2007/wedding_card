import './App.css'
import Home from "./pages/HomePage/home.jsx";
import Trendings from "./pages/HomePage/trendings.jsx";
import Editings from "./pages/HomePage/editings.jsx";
import Celebrates from "./pages/HomePage/celebrates.jsx";
import Shares from "./pages/HomePage/shares.jsx";
import Inspiration from "./components/homepage/inspiration.jsx";
import Inspirations from "./pages/HomePage/inspirations.jsx";
import Footer from './components/global/Footer'
import Navbar from './components/global/navbar'

function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <Home/>
        <Trendings/>
        <Editings/>
      <Celebrates/>
        <Shares/>
        <Inspirations/>
    </>
  )
}

export default App
