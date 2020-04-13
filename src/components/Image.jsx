import React, { Component } from "react";

const Image = ({ image }) => {
  return <img className="single-photo" src={image.urls.thumb} alt="image" />;
};

export default Image;
