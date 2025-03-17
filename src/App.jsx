import './App.css'
import Home from "./pages/HomePage/home.jsx";
import Trendings from "./pages/HomePage/trendings.jsx";
import Editings from "./pages/HomePage/editings.jsx";
import Celebrates from "./pages/HomePage/celebrates.jsx";
import Shares from "./pages/HomePage/shares.jsx";
import Inspiration from "./components/homepage/inspiration.jsx";
import Inspirations from "./pages/HomePage/inspirations.jsx";

function App() {

  return (
    <>
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
