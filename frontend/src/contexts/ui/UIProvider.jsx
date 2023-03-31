import { useState, useEffect } from 'react';
import UIContext from './UIContext';

//SIMPLIFICAR CODIGO
import wwwIcon from "./../../assets/assetsAbout/wwwIcon.png"
import wwwIconWhite from "./../../assets/assetsAbout/wwwIconWhite.png"
import CMSIcon from "./../../assets/assetsAbout/CMSIcon.png"
import CMSIconWhite from "./../../assets/assetsAbout/CMSIconWhite.png"
import ERPIcon from "./../../assets/assetsAbout/ERPIcon.png"
import ERPIconWhite from "./../../assets/assetsAbout/ERPIconWhite.png"
import CRMIcon from "./../../assets/assetsAbout/CRMIcon.png"
import CRMIconWhite from "./../../assets/assetsAbout/CRMIconWhite.png"
import APPIcon from "./../../assets/assetsAbout/APPIcon.png"
import APPIconWhite from "./../../assets/assetsAbout/APPIconWhite.png"
import EcommerceIcon from "./../../assets/assetsAbout/E-commerceIcon.png"
import EcommerceIconWhite from "./../../assets/assetsAbout/E-commerceIconWhite.png"

const UIProvider = ({children}) => {
    const [scrolled, setScrolled] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    //TODO: SIMPLIFICAR CODIGO
    // State para efecto visual de soluciones en about desde presentation
    const [background, setBackground] = useState('');
    const [background1, setBackground1] = useState('');
    const [background2, setBackground2] = useState('');
    const [background3, setBackground3] = useState('');
    const [background4, setBackground4] = useState('');
    const [background5, setBackground5] = useState('');

    const [color, setColor] = useState('');
    const [color11, setColor11] = useState('');
    const [color12, setColor12] = useState('');
    const [color13, setColor13] = useState('');
    const [color14, setColor14] = useState('');
    const [color15, setColor15] = useState('');

    const [color2, setColor2] = useState('');
    const [color21, setColor21] = useState('');
    const [color22, setColor22] = useState('');
    const [color23, setColor23] = useState('');
    const [color24, setColor24] = useState('');
    const [color25, setColor25] = useState('');

    const [iconSrcWWW, setIconSrcWWW] = useState(wwwIcon);
    const [iconSrcCMS, setIconSrcCMS] = useState(CMSIcon);
    const [iconSrcERP, setIconSrcERP] = useState(ERPIcon);
    const [iconSrcCRM, setIconSrcCRM] = useState(CRMIcon);
    const [iconSrcAPP, setIconSrcAPP] = useState(APPIcon);
    const [iconSrcEcommerce, setIconSrcEcommerce] = useState(EcommerceIcon);


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
    

      // Efecto visual para soluciones en About desde Presentation
    const handleColor = (setBackgroundFn, setColor1Fn, setColor2Fn, setIconSrcFn, iconSrc, iconSrcWhite) => {
      setTimeout(() => {
        setBackgroundFn('rgba(12, 47, 103, 0.821)');
        setColor1Fn('white');
        setColor2Fn('white');
      }, 400);
      setTimeout(() => {
        setIconSrcFn(iconSrcWhite);
      }, 500);
      setTimeout(() => {
        setBackgroundFn('transparent');
        setColor1Fn('#666');
        setColor2Fn('rgba(12, 47, 103, 0.821)');
      }, 1000);
      setTimeout(() => {
        setIconSrcFn(iconSrc);
      }, 1100);
      setTimeout(() => {
        setBackgroundFn('rgba(12, 47, 103, 0.821)');
        setColor1Fn('white');
        setColor2Fn('white');
      }, 1400);
      setTimeout(() => {
        setIconSrcFn(iconSrcWhite);
      }, 1500);
      setTimeout(() => {
        setBackgroundFn('transparent');
        setColor1Fn('#666');
        setColor2Fn('rgba(12, 47, 103, 0.821)');
      }, 1800);
      setTimeout(() => {
        setIconSrcFn(iconSrc);
      }, 1900);
    };

    // TODO: SIMPLIFICAR CODIGO
    const handleColor1 = () => {
      handleColor(setBackground, setColor, setColor2, setIconSrcWWW, wwwIcon, wwwIconWhite);
    };
    const handleColor2 = () => {
      handleColor(setBackground1, setColor11, setColor21, setIconSrcCMS, CMSIcon, CMSIconWhite);
    };
    const handleColor3 = () => {
      handleColor(setBackground2, setColor12, setColor22, setIconSrcERP, ERPIcon, ERPIconWhite);
    };
    const handleColor4 = () => {
      handleColor(setBackground3, setColor13, setColor23, setIconSrcCRM, CRMIcon, CRMIconWhite);
    };
    const handleColor5 = () => {
      handleColor(setBackground4, setColor14, setColor24, setIconSrcAPP, APPIcon, APPIconWhite);
    };
    const handleColor6 = () => {
      handleColor(setBackground5, setColor15, setColor25, setIconSrcEcommerce, EcommerceIcon, EcommerceIconWhite);
    };

    return (
        <UIContext.Provider
            value={{
                scrolled,
                sidebar,
                handleSidebar,
                handleColor1, handleColor2, handleColor3, handleColor4, handleColor5, handleColor6,
                background, background1, background2, background3, background4, background5,
                color, color11, color12, color13, color14,color15,
                color2, color21, color22, color23, color24, color25,
                iconSrcWWW, iconSrcCMS, iconSrcERP, iconSrcCRM, iconSrcAPP, iconSrcEcommerce,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;