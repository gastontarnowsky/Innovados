import "./css/homePage.css";
import { Header } from "../../shared/components";
import {About} from './components';
import Presentation from "./components/Presentation";
import {  RiMenuFill, RiCloseLine } from "react-icons/ri";
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
    </div>
  )
}

export default HomePage