import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import { BodySvg } from "./components";
import { useState } from "react";

function App() {
  const [showSection, setShowSection] = useState({
    intro: true,
    all: false,
    skills: false,
    projects: false,
    experience: false,
    interests: false,
  });
  const [loader, setLoader] = useState(false);
  const changeSection = (key) => {
    setShowSection((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, section) => {
        acc[section] = false;
        return acc;
      }, {});
      newState[key] = true;
      return newState;
    });
  };
  const handleExploreMeClick = () => {
    setLoader(true);
    setTimeout(() => {
      changeSection("all");
      setLoader(false);
    }, [1500]);
  };
  const handleExploreAllClick = (explore) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoader(true);
    setTimeout(() => {
      changeSection(explore);
      setLoader(false);
    }, 1500);
  };
  const handleGoBack = (backTo) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoader(true);
    setTimeout(() => {
      changeSection(backTo);
      setLoader(false);
    }, [1500]);
  };
  return (
    <div>
      <BodySvg />
      <Header onAvatarClick={handleGoBack}/>
      <Main
        showSection={showSection}
        loader={loader}
        handleExploreMeClick={handleExploreMeClick}
        handleExploreAllClick={handleExploreAllClick}
        handleGoBack={handleGoBack}
      />
      <Footer />
    </div>
  );
}

export default App;
