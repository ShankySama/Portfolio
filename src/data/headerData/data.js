import avatar_icon from "../../assets/images/avatar.png";
import darkmode_icon from "../../assets/images/dark_mode_bulb.png";
import lightmode_icon from "../../assets/images/light_mode_bulb.png";
import switchOnAudio from "../../assets/audios/switch-on.m4a";

export const headerData = {
  icon:avatar_icon,
  logo: {
    alt: "avatar-logo",
    height: 100,
    width: 100,
  },
  greeting: "Hi, How are you ?",
  title: "Pardeep Singh Rawat",
  subTitle: "Frontend Developer",
  mode: {
    lightMode: {
      height: 40,
      width: 40,
      alt: "light-mode-icon",
    },
    darkMode: {
      height: 40,
      width: 40,
      alt: "dark-mode-icon",
    },
    lightModeIcon:lightmode_icon,
    darkModeIcon:darkmode_icon,
  },
  switchOnAudio:switchOnAudio
};
