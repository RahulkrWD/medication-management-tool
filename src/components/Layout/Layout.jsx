import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeContext } from "../../context/ThemeProvider";

function Layout({ children }) {
  const { theme, themeChanger } = useContext(ThemeContext);
  return (
    <>
      <Navbar themeChanger={themeChanger} theme={theme} />
      <main className={theme ? "light-mode" : "dark-mode"}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
