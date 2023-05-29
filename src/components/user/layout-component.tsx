import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavBarComponent from "./nav-bar-components";


interface LayoutProps{
    children:ReactElement;
}
function LayoutComponent({children}:LayoutProps) {
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("language") || "ar");
    }, [i18n]);

   
    return ( 
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className=" bg-homeBG bg-cover bg-no-repeat w-full h-screen">
           <NavBarComponent/>
            {children}
        </div>
     );
}

export default LayoutComponent;