import React from "react";

const Features = () => {
  const features = [
    {
      icon: "https://www.workaway.info/gfx/2015/icons/icon-id-verification.svg",
      title: "Verified Profiles",
      description:
        "Every member goes through our verification process to ensure a safe community.",
    },
    {
      icon: "https://www.workaway.info/gfx/2015/icons/howitworks/support.svg",
      title: "24/7 Support",
      description:
        "Our dedicated support team is always here to help you with any concerns.",
    },
    {
      icon: "https://www.workaway.info/gfx/menu/solo-traveller.svg",
      title: "Solo Traveler Friendly",
      description:
        "Find like-minded travel buddies and never travel alone again.",
    },
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">
            Why Choose TravelBuddy
          </h2>
          <p className="text-muted">
            Connect with fellow travelers, share experiences, and explore the
            world together safely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body d-flex flex-column align-items-center">
                  {/* Icon */}
                  <div
                    className="mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="img-fluid"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-bold text-dark mb-2">
                    {feature.title}
                  </h5>
                  {/* Description */}
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
