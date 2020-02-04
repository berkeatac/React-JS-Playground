import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
import images from "../api/images";

const ImageList = props => {
  const imgs = images.map(image => (
    <ImageCard image={image} key={image.id} onClickF={props.onClickF} />
  ));

  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
