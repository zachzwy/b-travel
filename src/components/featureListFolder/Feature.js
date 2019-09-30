import React, { useState, useEffect, useContext } from "react";

const Feature = ({ feature, isOdd }) => {
  const { captionTitle, captionBody, backgroundImage, featureImage } = feature;

  return (
    <div className={isOdd ? "feature is-odd" : "feature"}>
      <div className="feature-black-background">
        <img
          className={
            isOdd
              ? "feature-background-image image-is-odd"
              : "feature-background-image"
          }
          src={backgroundImage}
          alt="This is feature background image"
        />
        <img
          className={isOdd ? "feature-image image-is-odd" : "feature-image"}
          src={featureImage}
        />
      </div>
      <div
        className={
          isOdd
            ? "feature-caption-container caption-is-odd"
            : "feature-caption-container"
        }
      >
        <div className="feature-caption-title">{captionTitle}</div>
        <div className="feature-caption-body">{captionBody}</div>
      </div>
    </div>
  );
};

export default Feature;
