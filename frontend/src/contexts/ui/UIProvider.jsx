import { useState, useEffect } from 'react';
import UIContext from './UIContext';

const UIProvider = ({children}) => {
    const [scrolled, setScrolled] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    //Cambiar el background al header al hacer scroll
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    // Mostrar Sidebar Responsive
    const handleSidebar = ()=> setSidebar(!sidebar);

    return (
        <UIContext.Provider
            value={{
                scrolled,
                sidebar,
                handleSidebar
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;