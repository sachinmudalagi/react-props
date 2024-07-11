import React from "react";
import "../assets/css/style.css";

const Ourteam = ({ props }) => {
  const { imageUrl, title, subtitle } = props;
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={imageUrl} alt="Member Profile" />
        </div>
        <div className="card-conent">
          <h1 className="card-title">{title}</h1>
          <p className="Subtitle">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
