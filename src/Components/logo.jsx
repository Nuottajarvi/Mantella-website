import React from "react";
import LogoImg from "../Images/logo.jpg";

export default class Logo extends React.Component {
  state = {
    classNames: "",
    hide: false
  };

  startStopAnimation = (anim) => {
    this.setState({ classNames: anim });
  };

  componentDidUpdate(prevProps) {
    if(this.props.tab === "/" && prevProps.tab !== "/") {
        this.setState({hide: false});
        this.startStopAnimation("logoFadeIn");
    } else if(this.props.tab !== "/" && prevProps.tab === "/") {
        this.setState({hide: false});
        this.startStopAnimation("logoFadeOut");
    }
  }

  componentDidMount() {
      if(this.props.tab !== "/") {
        this.setState({hide: true});
      }
  }

  render() {
    return (
      <div>
        {this.state.hide ? null :
          <div
            className={`logoholder ${this.state.classNames}`}>
            <img src={LogoImg} alt="logo" id="logo"/>
          </div>
        }
      </div>
    );
  }
}