import React from "react";

const Stats = () => {
  const stats = [
    {
      icon: "https://www.workaway.info/gfx/menu/solo-traveller.svg",
      text: "5000+ Solo Travelers",
    },
    {
      icon: "https://www.workaway.info/gfx/2015/icons/icon-shield.svg",
      text: "Verified Profiles",
    },
    {
      icon: "https://www.workaway.info/gfx/2015/icons/icon-comments-star.svg",
      text: "Real Reviews",
    },
  ];
  return(<>
  </>);

  // return (
  //   <section className="py-5 bg-light">
  //     <div className="container">
  //       <div className="row g-4">
  //         {stats.map((stat, index) => (
  //           <div key={index} className="col-12 col-sm-6 col-md-4">
  //             <div className="card border-0 shadow-sm h-100 text-center">
  //               <div className="card-body d-flex flex-column align-items-center">
  //                 <img
  //                   src={stat.icon}
  //                   alt={stat.text}
  //                   className="mb-3"
  //                   style={{ width: "50px", height: "50px" }}
  //                 />
  //                 <span className="fw-semibold">{stat.text}</span>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Stats;
