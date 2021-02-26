import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";




import './Home.css';
const home = () => {
  return (
    <>
    <Navbar/>
      <Hero>
        <Banner
          title="Check The Rooms"
          subtitle="Enjoy Your Stay"
        >
          <Link to="/rooms" className="btn-primary">
            Check out rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <Footer1/>
      
    </>
  );
};

export default home;
