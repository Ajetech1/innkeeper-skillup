import React from "react";
import Logo from "/innkeeperLogo.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

const FirstFooter = () => {
  return (
    <div>
      <img
        src={Logo}
        alt=""
        className="d-sm-block my-5"
        style={{ margin: "0 auto" }}
      />
      <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-5 text-lg-start text-center justify-content-around small">
        <div>
          <h4>Company</h4>

          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms and Services</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4>Courses</h4>

          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>Web Development</li>
            <li>Product Design</li>
            <li>Data Analytics</li>
            <li>Data Sciences / AI</li>
            <li>Creatives</li>
            <li>Sales and marketing</li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>

          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>Training</li>
            <li>Recruitment</li>
            <li>Project Delivery</li>
          </ul>
        </div>

        <div>
          <h4>Socials</h4>

          <ul className="list-unstyled d-flex gap-3 justify-content-around">
            <li className="fs-4">
              <GrFacebookOption />
            </li>
            <li className="fs-4">
              <AiFillInstagram />
            </li>
            <li className="fs-4">
              <MdEmail />
            </li>
            <li className="fs-4">
              <ImTwitter />
            </li>
            <li className="fs-4">
              <IoLogoWhatsapp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstFooter;
