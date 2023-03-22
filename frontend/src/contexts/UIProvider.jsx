import { useState, useEffect } from 'react';
import { links } from './UILinks';
import UIContext from './UIContext';

const UIProvider = ({children}) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 0) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <UIContext.Provider
            value={{
                scrolled,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;