import React, { useState, useEffect } from "react";

const DarkModeBtn = ({
  darkModeIcon,
  lightModeIcon,
  darkMode,
  lightMode,
  switchAudio,
}) => {
  const switchClickAudio = new Audio(switchAudio);
  const [darkModeOn, setDarkModeOn] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const handleModeChange = () => {
    switchClickAudio.play();
    setDarkModeOn((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark_mode", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark_mode", darkModeOn);
  }, [darkModeOn]);

  return (
    <button onClick={handleModeChange} className="mode_btn">
      {darkModeOn ? (
        <img src={darkModeIcon} {...darkMode} alt={darkMode?.alt} />
      ) : (
        <img src={lightModeIcon} {...lightMode} alt={lightMode?.alt} />
      )}
    </button>
  );
};

export default React.memo(DarkModeBtn);
