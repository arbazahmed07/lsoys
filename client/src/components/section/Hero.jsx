  // components/section/Hero.js
  import React from "react";
  import SearchForm from "../forms/SearchForm";
  import Stats from "./Stats";

  const Hero = () => {
    return (
      <section className="position-relative vh-100">
        <div className="position-absolute w-100 h-100">
          <img
            src="https://www.workaway.info/gfx/header_travelbuddy_1.jpg"
            alt="Hero background"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
        </div>

        <div className="position-relative z-2 container py-5 d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
          <h1 className="display-4 fw-bold text-white mb-4">
            Find Your Perfect Travel Buddy
          </h1>
          <p className="lead text-white mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            Connect with like-minded travelers, explore together, and create
            unforgettable memories around the world.
          </p>
          
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <SearchForm />
          </div>
          
          <div className="mt-5">
            <Stats />
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
