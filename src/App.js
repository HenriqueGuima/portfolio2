import React from "react";
import "./App.css";
import AboutComponent from "./components/AboutComponent";
import MainContentComponent from "./components/MainContentComponent";
import NavbarComponent from "./components/NavbarComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <React.Fragment>
      <NavbarComponent></NavbarComponent>
      <MainContentComponent></MainContentComponent>
      <AboutComponent></AboutComponent>
      <ProjectsComponent></ProjectsComponent>
    </React.Fragment>
  );
}

export default App;
