import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderButton(value) {
    return (
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {value => this.renderButton(value)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
