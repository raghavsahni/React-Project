import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css'

const Footer1 = () => {
  return (
  <footer className="site-footer">
    <div className="container">
    <br></br>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6 className='color'>About</h6>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque quidem nam aliquid vero reiciendis exercitationem, enim eius autem obcaecati beatae sapiente numquam modi, consequuntur placeat optio minima ipsum eligendi!</p>
        </div>

        <div className="col-xs-6 col-md-3">
          
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/form">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved  
       
          </p>
        </div>

      </div>
    </div>
</footer>
  );
}

export default Footer1;