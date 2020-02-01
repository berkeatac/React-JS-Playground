import React from "react";
import "./ImageList.css";

const ImageList = props => {
  // const images = props.images.map(item => (
  //   <img alt={item.description} src={item.urls.regular} key={item.id} />
  // ));

  const images = props.images.map(({ description, id, urls }) => (
    <img alt={description} src={urls.regular} key={id} />
  ));

  return <div className="image-list">{images}</div>;
};

export default ImageList;
