import React, { useState, useEffect } from "react";

const DarkModeBtn = ({ darkModeImg, lightModeImg, switchClick }) => {
  const switchClickAudio = new Audio(switchClick);
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
        <img {...darkModeImg} alt={darkModeImg.alt} />
      ) : (
        <img {...lightModeImg} alt={lightModeImg.alt} />
      )}
    </button>
  );
};

export default React.memo(DarkModeBtn);
