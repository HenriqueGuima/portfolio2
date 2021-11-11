import React, { Component } from "react";

export default class AboutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="text-justify big">About Me</h1>
              <p className="about-me">
                Tempor accusam sadipscing erat magna ut est stet vero diam
                dolores. Lorem et elitr gubergren sadipscing nonumy accusam amet
                sed,. Tempor accusam sadipscing erat magna ut est stet vero diam
                dolores. Lorem et elitr gubergren sadipscing nonumy accusam amet
                sed,. Tempor accusam sadipscing erat magna ut est stet vero diam
                dolores. Lorem et elitr gubergren sadipscing nonumy accusam amet
                sed,. Tempor accusam sadipscing erat magna ut est stet vero diam
                dolores. Lorem et elitr gubergren sadipscing nonumy accusam amet
                sed,.
              </p>
            </div>
            <div class="col-lg-6">
              <div class="container-fluid picture-background"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
