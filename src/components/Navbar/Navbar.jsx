import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import 'victormono';

const Navbar = () => {
  const navigate = useNavigate();
  const boyznav = () =>{
    navigate("/boyz");
  }
  const girlsnav = () =>{
    navigate("/girls");
  }
  const boyzcelnav = () =>{
    navigate("/boyzcelebrities");
  }
  const girlscelnav = () =>{
    navigate("/girlscelebrities");
  }
  return (
    <div className="navbar">
      <button onClick={boyznav}>Boyz</button>
      <button onClick={girlsnav}>Girls</button>
      <button onClick={boyzcelnav}>Boyz Celebrities</button>
      <button onClick={girlscelnav}>Girls Celebrities</button>
    </div>
  );
};

export default Navbar;
