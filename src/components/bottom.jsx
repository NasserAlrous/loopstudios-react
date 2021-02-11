import React from "react";
import imgCuriosity from "../images/desktop/image-curiosity.jpg";
import imgDeepEarth from "../images/desktop/image-deep-earth.jpg";
import imgFishEye from "../images/desktop/image-fisheye.jpg";
import imgFromAbove from "../images/desktop/image-from-above.jpg";
import imgGrid from "../images/desktop/image-grid.jpg";
import imgNightArcade from "../images/desktop/image-night-arcade.jpg";
import imgPocket from "../images/desktop/image-pocket-borealis.jpg";
import imgSoccer from "../images/desktop/image-soccer-team.jpg";

function BottomCreateArea() {
  return (
    <div>
    <div class="container-fluid bottom-container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <h1>OUR CREATION</h1>
        </div>
        <div class="col-lg-6 col-sm-12">
          <button type="button" name="button" class="see-all-btn">SEE ALL</button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <img src={imgCuriosity} alt="" class="bottom-img"/>
          <p class="img-title">THE CURIOSITY</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgDeepEarth} alt="" class="bottom-img"/>
          <p class="img-title">DEEP EARTH</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgFishEye} alt="" class="bottom-img"/>
          <p class="img-title">MAKE IT FISHEYE</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgFromAbove} alt="" class="bottom-img"/>
          <p class="img-title">FROM UP ABOVE VR</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <img src={imgGrid} alt="" class="bottom-img"/>
          <p class="img-title">THE GRID</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgNightArcade} alt="" class="bottom-img"/>
          <p class="img-title">NIGHT ARCADE</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgPocket} alt="" class="bottom-img"/>
          <p class="img-title">POCKET BOREALIS</p>
        </div>
        <div class="col-lg-3 col-sm-12">
          <img src={imgSoccer} alt="" class="bottom-img"/>
          <p class="img-title"> SOCCER TEAM VR </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BottomCreateArea;
