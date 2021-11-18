import React, { useState, useEffect, useContext } from "react";
import Navbar from "./global-components/navbar";
import Bannerv2 from "./section-components/banner-v2";
import Explore from "./section-components/explore";
import FeaturedProperties from "./section-components/featured-properties";
import Ads from "./section-components/ads";
import PropertiesByCities from "./section-components/properties-by-cities";
import RecentProperties from "./section-components/recent-properties";
import FeaturedPorject from "./section-components/featured-project";
import WhyChooseUs from "./section-components/why-choose-us";
import OurPartner from "./section-components/our-partner";
import Footer from "./global-components/footer";
import { DashboardService } from "../services/DashboardService";
import { AuthenticationContext } from "../context";
import Loader from "./global-components/loader";

const Home_V1 = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [dashboardData, setDashboardData] = useState(true);
  useEffect(() => {
    DashboardService.getDashboardItems().then((data) => {
      setDashboardData(data);
      setShowLoader(false);
    });
    // document.getElementById("preloader").fadeOut = 5000;
  }, []);

  useEffect(() => {
    console.log(dashboardData);
  }, [dashboardData]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Bannerv2 headers={dashboardData.headerImages} />
          <Explore />
          <FeaturedProperties />
          <Ads />
          <PropertiesByCities cities={dashboardData.topSearchCities} />
          <RecentProperties />
          <FeaturedPorject />
          <WhyChooseUs />
          <OurPartner />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home_V1;
