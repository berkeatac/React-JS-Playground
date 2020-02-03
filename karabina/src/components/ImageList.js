import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
import images from "../api/images";

const ImageList = props => {
  // const images = props.images.map(item => (
  //   <img alt={item.description} src={item.urls.regular} key={item.id} />
  // ));

  // const images = props.images.map(image => (
  //   <ImageCard image={image} key={image.id} />
  // ));

  const imgs = images.map(image => <ImageCard image={image} key={image.id} />);

  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
