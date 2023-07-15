import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import p1 from "../../assets/pxfuel.jpg";
import p2 from "../../assets/sLRfghosNM8_large.jpg";

const Home = () => {
  const navigate = useNavigate();
  const boysnav = () => {
    navigate("/boyz");
  };
  const girlsnav = () => {
    navigate("/girls");
  };

  return (
    <>
      <div className="home">
        <div className="heading">
          <h1>IITK FaceMASH</h1>
        </div>
        <div className="panel1">
          <button onClick={boysnav}>
            <img src={p1}/>
          </button>
          <h2 className="text"> The Boyz </h2>
        </div>
        <div className="panel2">
          <button onClick={girlsnav}>
            <img src={p2}/>
          </button>
          <h2 className="text"> The Girls </h2>
        </div>
        <div className="seperator">
          <h1>OR</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
