import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";


const Error = () => {
  return (
    <>
    <Navbar/>
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/home" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
    <Footer1/>
    </>
  );
};

export default Error;
