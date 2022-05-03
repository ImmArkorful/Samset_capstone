import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/global-components/navbar";
import Bannerv2 from "../components/section-components/banner-v2";
import Explore from "../components/section-components/explore";
import FeaturedProperties from "../components/section-components/featured-properties";
import Ads from "../components/section-components/ads";
import PropertiesByCities from "../components/section-components/properties-by-cities";
import RecentProperties from "../components/section-components/recent-properties";
import FeaturedPorject from "../components/section-components/featured-project";
import WhyChooseUs from "../components/section-components/why-choose-us";
import OurPartner from "../components/section-components/our-partner";
import Footer from "../components/global-components/footer";
import { DashboardService } from "../services/DashboardService";
import { AuthenticationContext } from "../context";
import Loader from "../components/global-components/loader";

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
          <Explore cities={dashboardData.topSearchCities} />
          <FeaturedProperties
            featuredProperties={dashboardData.featuredProperties}
          />
          <Ads />
          <PropertiesByCities cities={dashboardData.topSearchCities} />
          <RecentProperties
            recentProperties={dashboardData.featuredProperties}
          />
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
