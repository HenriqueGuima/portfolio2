import React, { Component } from "react";

export default class MainContentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="row" style={{ alignItems: "center" }}>
          <div class="col-lg-6">
            <div class="container-fluid picture-background"></div>
          </div>
          <div class="col-lg-6">
            <h1 class="text-justify big">Henrique Guimarães</h1>
            <h1 class="text-justify small">Web Developer</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
