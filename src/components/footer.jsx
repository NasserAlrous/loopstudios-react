import React from "react";
import facebookIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pintrestIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";

function FooterCreateArea() {
  return (
    <div>
      <div class="container-fluid footer-container">
        <div class="row">
          <div class="col-lg-10 col-sm-12">
            <h5>loopstudios</h5>
          </div>
          <div class="col-lg-2 col-sm-12 social-icons">
            <a href="https://www.facebook.com/"><img src={facebookIcon} class="facebook"></img></a>
            <a href="https://www.instagram.com/?hl=en"><img src={instagramIcon} class="instagram"></img></a>
            <a href="https://www.pinterest.com/"><img src={pintrestIcon} class="pintrest"></img></a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12 links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#Support">Support</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCreateArea;
