import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container text-center pt-5">
      <div className="header">
        <h2 className="text-capitalize">
          Top Writer in Bangladesh.
        </h2>
        <p className="py-2 fst-italic fw-bold">
        The Writers listed below were either born in Bangladesh or else published much of their writing while living in that country.
        </p>
        <h3>Total buget: 10M</h3>
      </div>
    </div>
  );
};

export default Header;
