import { Outlet } from "react-router-dom";
import Navbar from "../../src/Pages/shared/Navbar/Navbar";
import Footer from "../../src/Pages/shared/Footer/Footer";
import { useTheme } from "../Provider/ThemeContext";

const Main = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
