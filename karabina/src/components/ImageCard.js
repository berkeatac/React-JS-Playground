import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
    this.imageRef.current.addEventListener("click", e =>
      this.props.onClickF(this.props.image)
    );
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    // const { description, urls } = this.props.image;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, textAlign: "center" }}
      >
        <img ref={this.imageRef} src={this.props.image.src} />
      </div>
    );
  }
}

export default ImageCard;
