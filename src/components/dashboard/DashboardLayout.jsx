import React, { useState, useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSlider from "./DashboardSlider";
import "../../styles/Dashboard.css";

function DashboardLayout({ children }) {
  const [isSliderOpen, setIsSliderOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (mobile) {
        setIsSliderOpen(false);
      } else {
        setIsSliderOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="dashboard-layout">
      <DashboardNavbar
        toggleSlider={toggleSlider}
        isSliderOpen={isSliderOpen}
      />
      <div className="dashboard-container">
        <DashboardSlider
          isOpen={isSliderOpen}
          toggleSlider={toggleSlider}
          isMobile={isMobile}
        />
        <main
          className={`dashboard-main-content ${
            isSliderOpen ? "" : "full-width"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
