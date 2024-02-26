import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>jagadeeshvj37@gmail.com</span>
        {/* <span>8754820720</span> */}
        <div className="f-icons">
          <a href="https://www.instagram.com/jaghu_bhai?igsh=NXc1NnQ3bmRqM2Rr" target="_blank">
          <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/jagadeeshvj37?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/Jagadeeshvj37">
          <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
