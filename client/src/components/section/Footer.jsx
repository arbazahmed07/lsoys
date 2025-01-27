import React from "react";

const Footer = () => {
  const footerLinks = {
    Explore: [
      { label: "Find Travel Buddies", href: "#" },
      { label: "Popular Destinations", href: "#" },
    ],
    Support: [
      { label: "Help Center", href: "#" },
      { label: "Safety Center", href: "#" },
    ],
    Legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        {/* Top Section */}
        <div className="row mb-4">
          {/* Logo and Description */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h3 className="fw-bold text-white">TravelBuddy</h3>
            <p className="text-light">
              Connect with travelers and make your journey unforgettable.
              Discover the world, one step at a time.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-12 col-md-8">
            <div className="row text-center text-md-start">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div className="col-6 col-md-4 mb-4" key={section}>
                  <h5 className="text-white fw-semibold">{section}</h5>
                  <ul className="list-unstyled">
                    {links.map((link) => (
                      <li key={link.label} className="mb-2">
                        <a
                          href={link.href}
                          className="text-light text-decoration-none"
                          style={{
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#00bcd4")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "inherit")
                          }
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-top border-secondary pt-3">
          <p className="text-light mb-0">
            © {new Date().getFullYear()} TravelBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
