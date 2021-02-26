import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
// import Footer1 from "./components/Footer";
// import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Team from "./pages/Team";
import Register from "./components/Register";
import Auth from "./components/Auth";



function App() {
 
  
  
  return (
    
    <>
  
      {/* <Navbar /> */}
      <Switch>
      <Route exact path="/" component={Auth} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/form" component={Register} />
        <Route component={Error} />
      </Switch>
      {/* <Footer1></Footer1> */}
 

    </>
  );
}

export default App;
