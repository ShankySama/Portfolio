import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Title from "./Title";
import Subtitle from "./Subtitle";
import DarkModeBtn from "./DarkModeBtn";
import { getData } from "../commonFunctions";
import { API_CONFIG } from "../utils";
import Skeleton from "react-loading-skeleton";
import "./Header.css";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!headerData) {
      setLoading(true);
      const fetchData = async () => {
        const data = await getData(
          API_CONFIG.BASE_URL + API_CONFIG.GET_HEADER_DATA
        );
        setHeaderData(data);
        setLoading(false);
      };
      fetchData();
    }
  }, [headerData]);

  return (
    <div className="header_container">
      <div className="logo_container">
        <div className="avatar_container">
          {loading ? (
            <Skeleton height={100} width={100} circle className="mb-1" />
          ) : (
            <Avatar logo={headerData?.logo} greeting={headerData?.greeting} />
          )}
        </div>
        <div className="title_container">
          {loading ? (
            <>
              <Skeleton height={20} width={150} className="mb-1" />
              <Skeleton height={10} width={100} />
            </>
          ) : (
            <>
              <Title title={headerData?.title} />
              <Subtitle subTitle={headerData?.subTitle} />
            </>
          )}
        </div>
      </div>
      <div>
        {loading ? (
          <Skeleton height={50} width={50} />
        ) : (
          <DarkModeBtn
            darkModeImg={headerData?.mode?.darkMode}
            lightModeImg={headerData?.mode?.lightMode}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
