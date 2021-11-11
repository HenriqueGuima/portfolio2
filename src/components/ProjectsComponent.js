import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class ProjectsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="row project-row">
                  <div class="col-lg-2 project-img-erre"></div>
                  <div class="col-lg-6">
                    <h3>
                      Kasd sea rebum nonumy sea diam voluptua accusam nonumy
                      clita voluptua, ea et rebum et lorem ea. Stet tempor
                      tempor.
                    </h3>
                  </div>
                  <div class="col-lg-2">
                    <img src="./assets/pics/guima.jpg"></img>
                    <img src="./assets/pics/guima.jpg"></img>
                  </div>
                </div>
                <div class="row project-row">
                  <div class="col-lg-2 project-img-erre"></div>
                  <div class="col-lg-6">
                    <h3>
                      Kasd sea rebum nonumy sea diam voluptua accusam nonumy
                      clita voluptua, ea et rebum et lorem ea. Stet tempor
                      tempor.
                    </h3>
                  </div>
                  <div class="col-lg-2">
                    <img src="./assets/pics/guima.jpg"></img>
                    <img src="./assets/pics/guima.jpg"></img>
                  </div>
                </div>
                <div class="row project-row">
                  <div class="col-lg-2 project-img-erre"></div>
                  <div class="col-lg-6">
                    <h3>
                      Kasd sea rebum nonumy sea diam voluptua accusam nonumy
                      clita voluptua, ea et rebum et lorem ea. Stet tempor
                      tempor.
                    </h3>
                  </div>
                  <div class="col-lg-2">
                    <img src="./assets/pics/guima.jpg"></img>
                    <img src="./assets/pics/guima.jpg"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6"></div>
            <Carousel>
              <div>
                <img src="assets/pics/guima.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="assets/pics/guima.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="assets/pics/guima.jpg" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
