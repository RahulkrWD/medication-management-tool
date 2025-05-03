import React, { createContext, useRef, useState, useContext } from "react";
import { Tour } from "antd";

export const BeginTourContext = createContext();

export const useBeginTour = () => {
  return useContext(BeginTourContext);
};

export const BeginTourProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // All refs needed for the entire application tour
  const refs = {
    // Navbar refs
    notificationButton: useRef(null),
    profileButton: useRef(null),

    // Slider refs
    medicationsRef: useRef(null),
    profileRef: useRef(null),
    settingsRef: useRef(null),
    logoutRef: useRef(null),
  };

  const steps = [
    {
      title: "Medications",
      description: "Manage all your medications from this section.",
      target: () => refs.medicationsRef.current,
      placement: "right",
    },
    {
      title: "Profile",
      description: "Update your personal information and preferences.",
      target: () => refs.profileRef.current,
      placement: "right",
    },
    {
      title: "Settings",
      description: "Configure application preferences and options.",
      target: () => refs.settingsRef.current,
      placement: "right",
    },
    {
      title: "Logout",
      description: "Logout button and navigate into Login page",
      target: () => refs.logoutRef.current,
      placement: "right",
    },
    {
      title: "Notifications",
      description: "Check your alerts and reminders here.",
      target: () => refs.notificationButton.current,
      placement: "left",
    },
    {
      title: "User Profile",
      description: "Access your account settings and logout option.",
      target: () => refs.profileButton.current,
      placement: "left",
    },
  ];

  const beginTour = () => {
    setOpen(true);
  };

  return (
    <BeginTourContext.Provider value={{ refs, beginTour }}>
      {children}
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </BeginTourContext.Provider>
  );
};
