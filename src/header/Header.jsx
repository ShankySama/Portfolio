import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Title from "./Title";
import Subtitle from "./Subtitle";
import DarkModeBtn from "./DarkModeBtn";
import { getData } from "../commonFunctions";
import { API_CONFIG } from "../utils";
import "./Header.css";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    if (!headerData) {
      const fetchData = async () => {
        const data = await getData(
          API_CONFIG.BASE_URL + API_CONFIG.GET_HEADER_DATA
        );
        setHeaderData(data);
      };
      fetchData();
    }
  }, [headerData]);

  return (
    <div className="header_container">
      {headerData && (
        <>
          <div className="logo_container">
            <div className="avatar_container">
              <Avatar logo={headerData?.logo} greeting={headerData?.greeting} />
            </div>
            <div className="title_container">
              <Title title={headerData?.title} />
              <Subtitle subTitle={headerData?.subTitle} />
            </div>
          </div>
          <div>
            <DarkModeBtn
              darkModeImg={headerData?.mode?.darkMode}
              lightModeImg={headerData?.mode?.lightMode}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
