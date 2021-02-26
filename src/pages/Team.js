import React from "react";
import Img1 from "../images/lavish.png";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";
import './Team.css';
import { FaFacebookF ,FaInstagram ,FaGithub} from "react-icons/fa";


const Team = () => {
  return (
    <div>
    <Navbar/>
     <Hero>
        <Banner
          title="Team"
          subtitle="Check our Team"
        >
          <Link to="/home" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>

     <div className="bg-light py-3">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-xl-12 text-center ">
        
          <p className="lead disp about text">
            Our Team
          </p>

          <p className="font-italic text-muted">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
          </p>
        </div>
      </div>
      
  
       
      <div class="row text-center">
       
  
       <div className="col-xl-4 col-sm-6 mb-5 card ">
         <div className=" rounded  py-5 px-4 ">
         <a class="instagram" href="https://raghavsahni.co.in/"   rel="noopener noreferrer" target="_blank">
        <img src={ Img1}  alt="name" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
        </a>

           <h3 className="mb-0 about">Raghav Sahni</h3>
           <br></br>
               <div class ='row center '>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon'>

              <FaFacebookF/>
              </p>
              </a>

            </div>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon insta'>

              <FaInstagram/>
              </p>
              </a>

            </div>   
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon git'>

              <FaGithub/>
              </p>
              </a>

           </div>         
          </div>
           
       </div>
       </div>
       <div className="col-xl-4 col-sm-6 mb-5 card ">
         <div className=" rounded  py-5 px-4 ">
         <a class="instagram" href="https://google.com/" rel="noopener noreferrer" >
        <img src={ Img1}  alt="name" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
        </a>
           <h3 className="mb-0 about">Raghav Sahni</h3>
           <br></br>
           <div class ='row center '>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
          
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon'>

              <FaFacebookF/>
              </p>
              </a>

            </div>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon insta'>

              <FaInstagram/>
              </p>
              </a>

            </div>   
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon git'>

              <FaGithub/>
              </p>
              </a>

           </div>         
          </div>
           
       </div>
       </div>
       <div className="col-xl-4 col-sm-6 mb-5 card ">
         <div className=" rounded  py-5 px-4 ">
         <a class="instagram" href="https://google.com/" target="_blank" rel="noopener noreferrer">
        <img src={ Img1}  alt="name" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
        </a>
           <h3 className="mb-0 about">Raghav Sahni</h3>
           <br></br>
           <div class ='row center '>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon'>

              <FaFacebookF/>
              </p>
              </a>

            </div>
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon insta'>

              <FaInstagram/>
              </p>
              </a>

            </div>   
            <div class='col-xs-4 col-s-4 col-m-4 col-lg-4 col-xl-4'>
              <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
              <p class='icon git'>

              <FaGithub/>
              </p>
              </a>

           </div>         
          </div>
               

                
           
       </div>
       </div>

       </div>
        
</div>
      </div>
      <Footer1/>

  </div>
  

  );
};

export default Team;


 