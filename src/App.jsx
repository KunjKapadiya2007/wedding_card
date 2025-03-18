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
import Favorites from "./pages/myprofile/favorites.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Home/>
        <Trendings/>
        <Editings/>
      <Celebrates/>
        <Shares/>
        <Inspirations/>
      <Footer />
      {/*  <Favorites/>*/}
    </>
  )
}

export default App
