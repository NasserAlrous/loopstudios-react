import React from "react";
import imgHero from "../images/desktop/image-hero.jpg"

function TopCreateArea() {
  return (
    <div>
  <div class="container-fluid top-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">loopstudios</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<img src={imgHero} alt="hero-img" class="img-hero"/>
<div class="text-block-1">
      <h1>IMMERSIVE</h1>
      <h1>EXPERINCES</h1>
      <h1>THAT DELIVER</h1>
    </div>
</div>

);
}

export default TopCreateArea;
