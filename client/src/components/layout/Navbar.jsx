import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search" },
    { href: "/profiles", label: "Profiles" },
<<<<<<< HEAD
    // { href: "messaging", label: "Messages" },
=======
    { href: "#messaging", label: "Messages" },
>>>>>>> 085619e9fb0cdec3a24d587fe2f278d75ad14c13
    { href: "/addprofile", label: "Add Profile" },
  ];

  const profile = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://avatar.iran.liara.run/public",
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light border-end fixed-top ${
        isMobileMenuOpen ? 'bg-transparent backdrop-blur' : 'bg-light'
      }`}
      style={{
        backdropFilter: isMobileMenuOpen ? 'blur(10px)' : 'none',
        backgroundColor: isMobileMenuOpen ? 'rgba(255, 255, 255, 0.8)' : ''
      }}>
        <div className="container-fluid px-3">
          <img
            src="https://www.workaway.info/gfx/2015/logo_main.svg"
            alt="Workaway Logo"
<<<<<<< HEAD
            className="navbar-brand img-fluid"
            style={{ maxHeight: "40px" }}
          />
          
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="navbarContent"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span 
              className="fs-4 fw-bold" 
              style={{ 
                color: isMobileMenuOpen ? '#0d6efd' : '#6c757d',
                transform: 'rotate(90deg)',
                display: 'inline-block'
              }}
            >
              {isMobileMenuOpen ? '×' : '⋮'}
            </span>
          </button>

          {/* Desktop Menu Items */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item me-3" key={item.label}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
=======
            className="img-fluid mb-4"
            style={{ maxHeight: "50px" }}
          />
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li className="nav-item mb-2" key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "nav-link text-primary fw-bold" : "nav-link text-dark fw-medium"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-top p-4 position-absolute bottom-0 start-0 w-100">
          <div className="d-flex align-items-center">
            <img
              src={profile.avatar}
              alt={`${profile.name} Profile`}
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">{profile.name}</p>
              <small className="text-muted">{profile.email}</small>
            </div>
>>>>>>> 085619e9fb0cdec3a24d587fe2f278d75ad14c13
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      {/* Spacer for fixed navbar */}
      <div style={{ height: "56px" }} aria-hidden="true"></div>
=======
      {/* Mobile Navbar */}
      <div className="d-lg-none position-fixed top-0 start-0 w-100 bg-light shadow-sm z-3">
        <div className="d-flex align-items-center justify-content-between px-3 py-2">
          <img
            src="https://www.workaway.info/gfx/2015/logo_main.svg"
            alt="Workaway Logo"
            className="img-fluid"
            style={{ maxHeight: "40px" }}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"} fs-4`}></i>
          </button>
        </div>
      </div>
>>>>>>> 085619e9fb0cdec3a24d587fe2f278d75ad14c13

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100" 
             style={{ 
               zIndex: 1040,
               backgroundColor: 'rgba(0, 0, 0, 0.3)',
               backdropFilter: 'blur(4px)'
             }}
             onClick={() => setIsMobileMenuOpen(false)}
             role="presentation"
        >
          {/* Mobile Menu Panel */}
          <div 
            className="bg-light h-100 shadow-sm p-4 ms-auto" 
            style={{ 
              width: "250px",
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img
                src="https://www.workaway.info/gfx/2015/logo_main.svg"
                alt="Workaway Logo"
                className="img-fluid"
                style={{ maxHeight: "40px" }}
              />
              <button
                className="btn btn-outline-secondary border-0"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <span className="fs-4 text-primary fw-bold">×</span>
              </button>
            </div>
            <ul className="nav flex-column">
              {navItems.map((item) => (
                <li className="nav-item mb-2" key={item.label}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
<<<<<<< HEAD
                      `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
=======
                      isActive ? "nav-link text-primary fw-bold" : "nav-link text-dark fw-medium"
>>>>>>> 085619e9fb0cdec3a24d587fe2f278d75ad14c13
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
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