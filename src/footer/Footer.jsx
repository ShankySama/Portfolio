import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API_CONFIG } from "../utils";
import { getData } from "../commonFunctions";
import "./Footer.css";
import Skeleton from "react-loading-skeleton";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!footerData) {
      setLoader(true);
      const fetchData = async () => {
        const data = await getData(
          API_CONFIG.BASE_URL + API_CONFIG.GET_FOOTER_DATA
        );
        setFooterData(data);
        setLoader(false);
      };
      fetchData();
    }
  }, [footerData]);

  return (
    <div className="footer_container">
      <div className="footer_title_container">
        {loader ? (
          <Skeleton height={40} width={160} />
        ) : (
          <h1 className="footer_title">{footerData?.title}</h1>
        )}
      </div>
      <div className="footer_container_cards">
        {loader ? (
          <>
            <Skeleton height={70} />
            <Skeleton height={70} />
            <Skeleton height={70} />
            <Skeleton height={70} />
            <Skeleton height={70} />
          </>
        ) : (
          footerData?.profiles.map((profile, index) => (
            <Card profile={profile} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Footer);
