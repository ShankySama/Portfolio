import React, { useState, useEffect } from "react";
import darkModeBulb from "../assets/images/dark_mode_bulb.png";
import lightModeBulb from "../assets/images/light_mode_bulb.png";
import switchOnAudio from "../assets/audios/switch-on.m4a";

const DarkModeBtn = ({ darkModeImg, lightModeImg }) => {
  const switchClickAudio = new Audio(switchOnAudio);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const handleModeChange = () => {
    switchClickAudio.play();
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark_mode", newMode);
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark_mode", darkMode);
  }, [darkMode]);

  return (
    <button onClick={handleModeChange} className="mode_btn">
      {darkMode ? (
        <img src={darkModeBulb} {...darkModeImg} alt={darkModeImg?.alt} />
      ) : (
        <img src={lightModeBulb} {...lightModeImg} alt={lightModeImg?.alt} />
      )}
    </button>
  );
};

export default React.memo(DarkModeBtn);
