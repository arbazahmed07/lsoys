
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Hero from "./components/section/Hero";
// import Features from "./components/section/Features";
// import Footer from "./components/section/Footer";
// import Profiles from "./components/Profile/Profiles"; 
// import AddProfile from "./components/Profile/Addprofile";
// import ProfilePage from "./components/Profile/ProfilePage";
// const App = () => {
//   return (
//     <Router>
//       <div className="d-flex min-vh-100">
//         <Navbar />
//         <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
//           <main>
//             <Routes>
//               <Route path="/" element={<Hero />} />
//               <Route path="/profiles" element={<Profiles />} /> {/* Add the Profiles route */}
//               <Route path="/search" element={<Features />} />
//               <Route path="/addprofile" element={<AddProfile />} />
//               <Route path="/profile/:id" component={<ProfilePage/>} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout/Root";  // Import the RootLayout component
import Hero from "./components/section/Hero";
import Features from "./components/section/Features";
import './App.css';

import Profiles from "./components/Profile/Profiles"; 
import AddProfile from "./components/Profile/AddProfile";
import ProfilePage from "./components/Profile/ProfilePage";
import SearchForm from "./components/forms/SearchForm";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* RootLayout will wrap all routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="search" element={<SearchForm />} />
          <Route path="addprofile" element={<AddProfile />} />
          <Route path="profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
