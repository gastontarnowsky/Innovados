import "./css/homePage.css";
import { Footer, Header } from "../../shared/components";
import About from '../about/About';
import Presentation from "./components/Presentation";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useContext } from 'react';
import UIContext from "../../contexts/ui/UIContext";

const HomePage = () => {
  const { sidebar, handleSidebar } = useContext(UIContext);
  return (
    <div className="cont">
        <Header />
        <button className="botonSidebar" onClick={handleSidebar}>
          {sidebar ? <RiCloseLine /> : <RiMenuFill />}
        </button>
        <Presentation />
        <About />
        <Footer />
    </div>
  )
}

export default HomePage