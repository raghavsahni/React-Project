import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";


const Rooms = () => {
  return (
    <>
    <Navbar/>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/home" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer1/>
    </>
  );
};

export default Rooms;
