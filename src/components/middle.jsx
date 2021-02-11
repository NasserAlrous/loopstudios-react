import React from "react";
import imgIneractive from "../images/desktop/image-interactive.jpg"

function MiddleCreateArea() {
  return (
    <div>
    <div class="container-fluid middle-container">
      <img src={imgIneractive} alt="interactive-img" class="imgIneractive"/>
      <div class="text-block-2">
        <h3 class="about-text-title">THE LEADER IN</h3>
        <h3 class="about-text-title">INTERACTIVE VR</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
      </div>
    </div>
  </div>
  )
}

export default MiddleCreateArea;
