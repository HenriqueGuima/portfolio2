import React, { Component } from "react";

export default class NavbarComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid navbar-style navbar-fxed-glass">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a name="" id="" class="btn btn-primary" href="#" role="button">
                CV
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
