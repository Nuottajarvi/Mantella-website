import React from "react";
import LogoImg from "../Images/logo.jpg";

export default class Logo extends React.Component {
  state = {
    classNames: ""
  };

  startStopAnimation = (anim) => {
    this.setState({ classNames: anim });
  };

  componentDidUpdate(prevProps) {
    if(this.props.tab === "Mantella" && prevProps.tab !== "Mantella") {
        this.startStopAnimation("logoFadeIn");
    } else if(this.props.tab !== "Mantella" && prevProps.tab === "Mantella") {
        this.startStopAnimation("logoFadeOut");
    }
  }

  render() {
    return (
      <div>
        <div 
            className={`logoholder ${this.state.classNames}`}>
            <img src={LogoImg} alt="logo" id="logo"/>
        </div>
      </div>
    );
  }
}