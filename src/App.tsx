import { useTranslation } from "react-i18next";
import LayoutComponent from "./components/user/layout-component";
import NavBarComponent from "./components/user/nav-bar-components";
import HomeContainer from "./containers/user/home-container";


function App() {

  const {t} = useTranslation();

  return (
    <LayoutComponent >
      <HomeContainer/>
    </LayoutComponent>
  );
}

export default App;
