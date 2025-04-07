import React from "react";
import "./home.css";
import HeroCard from "../heroCard/HeroCard";
import Hero from "../hero/Hero";
import Slogan from "../slogan/Slogan";

function Home() {
  return (
    <>
    {/* The hero image will be  here  */}
    <HeroCard>
        <Hero image="home-img" />
        <Slogan />
      </HeroCard>
      <section className="content">
        <h1 className="home-title heading">Home</h1>

        <div className="home-info">
          <div className="home-item project">
            <div className="item-text">
              <p>Join our projects.</p>
            </div>
            <div className="item-pic">
              <img
                src={"images/boysandgirls.jpg"}
                alt="Picture showing staff planning a project"
              />
            </div>
          </div>

          <div className="home-item register">
            <div className="item-text">
              <p>Register as a Volunteer.</p>
            </div>
            <div className="item-pic">
              <img
                src={"images/three-volunteers.jpg"}
                alt="picture of three volunteer staff"
              />
            </div>
          </div>

          <div className="home-item contact">
            <div className="item-text">
              <p>Get in touch with us.</p>
            </div>
            <div className="item-pic">
              <img
                src={"images/contact.jpg"}
                alt="Contact us image showing a telephone"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
