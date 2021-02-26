import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Footer1 from "../components/Footer";
import Navbar from "../components/Navbar";



export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      id: this.props.match.params.id,
      defaultBcg: defaultBcg
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.id);

    if (!room) {
      return (
        <>
        <Navbar/>
        <div className="error">
          <h3> no room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
        <Footer1/>
        </>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      images
    } = room;
    const [ ...defaultImages] = images;
    // console.log(defaultImages);

    return (
      <>
      <Navbar/>
        <StyledHero img={images[3] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : Rs{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <Footer1/>
      </>
    );
  }
}
