import React from "react";
// import {image1} from '../images/details-1.jpeg';
import defaultImg from "../images/illus_kftyh4.png";
// import { Link } from "react-router-dom";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";




import './About.css'
const About = () => {
  return (
    <div>
    <Navbar/>
        <div className="bg-light">
        <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
            <p className="about disp text">About Us</p>
            <p className="font-italic text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, perspiciatis. Et totam molestias consequuntur enim corrupti ipsum, iusto aut esse facilis quia aliquid non quaerat nam voluptatibus quos accusamus officiis.
                
            </p> 
            </div>
            <div className="col-lg-6 d-none d-lg-block">
            {/* <img src={image1} alt='image1' /> */}
            <img src={ defaultImg} alt="single room" className='img-fluid' />

            </div>
        </div>
        </div>
    </div>

    <div className="bg-white py-5">
    <div className="container py-5">
      <p className="about disp text-center text">How It Works?</p>
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <p className="font-weight-light about size">lorem Ipsum</p>
          <p className="font-italic text-muted mb-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, perspiciatis. Et totam molestias consequuntur enim corrupti ipsum, iusto aut esse facilis quia aliquid non quaerat nam voluptatibus quos accusamus officiis.
          </p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
        <img src={ defaultImg} alt="single room" className="img-fluid mb-4 mb-lg-0"/>
        </div>
      </div>


      <div className="row align-items-center">
        <div className="col-lg-5 px-3 mx-auto">
        <img src={ defaultImg} alt="single room" className="img-fluid mb-4 mb-lg-0"/>
        </div>
        <div className="col-lg-6">
 
          <p className="font-weight-light about size">lorem Ipsum</p>
          <p className="font-italic text-muted mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, perspiciatis. Et totam molestias consequuntur enim corrupti ipsum, iusto aut esse facilis quia aliquid non quaerat nam voluptatibus quos accusamus officiis.
           </p>
         
        </div>
      </div>


      <div className="row align-items-center ">
        <div className="col-lg-6 order-2 order-lg-1">
        
          <p className="font-weight-light about size">lorem Ipsum </p>
          <p className="font-italic text-muted mb-4 ">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, perspiciatis. Et totam molestias consequuntur enim corrupti ipsum, iusto aut esse facilis quia aliquid non quaerat nam voluptatibus quos accusamus officiis. </p>
       
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
        <img src={ defaultImg} alt="single room" className="img-fluid mb-4 mb-lg-0"/>
        </div>
      </div>

      
    </div>
  </div>

  <Footer1></Footer1>

  </div>
  

  );

};
export default About;
