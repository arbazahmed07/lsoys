// components/layout/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search" },
    { href: "/profiles", label: "Profiles" },  
    { href: "#messaging", label: "Messages" },
    { href: "/addprofile", label: "Add Profile" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="d-none d-lg-block bg-light border-end vh-100 position-fixed" style={{ width: "250px" }}>
        <div className="p-4">
          <img
            src="https://www.workaway.info/gfx/2015/logo_main.svg"
            alt="Logo"
            className="img-fluid mb-4"
            style={{ maxHeight: "50px" }}
          />
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li className="nav-item mb-2" key={item.label}>
                <Link to={item.href} className="nav-link text-dark fw-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-top p-4 position-absolute bottom-0 start-0 w-100">
          <div className="d-flex align-items-center">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">John Doe</p>
              <small className="text-muted">john@example.com</small>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="d-lg-none position-fixed top-0 start-0 w-100 bg-light shadow-sm z-3">
        <div className="d-flex align-items-center justify-content-between px-3 py-2">
          <img
            src="https://www.workaway.info/gfx/2015/logo_main.svg"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "40px" }}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="bi bi-list fs-4"></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">
          <div className="bg-light vh-100 shadow-sm p-4" style={{ width: "250px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img
                src="https://www.workaway.info/gfx/2015/logo_main.svg"
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "40px" }}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-x fs-4"></i>
              </button>
            </div>
            <ul className="nav flex-column">
              {navItems.map((item) => (
                <li className="nav-item mb-2" key={item.label}>
                  <Link
                    to={item.href}
                    className="nav-link text-dark fw-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
