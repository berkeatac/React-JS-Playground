import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    this.imageRef.current.addEventListener("click", e =>
      this.props.onClickF(this.props.image)
    );
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10) + 6;

    this.setState({ spans });
  };

  render() {
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, textAlign: "center" }}
      >
        <h3>{this.props.image.src}</h3>
        <img ref={this.imageRef} src={this.props.image.src} />
      </div>
    );
  }
}

export default ImageCard;
