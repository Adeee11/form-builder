import React from "react";

const Description = (props: {
  DescriptionHeading: String;
  DescriptionText: String;
}) => {
  return (
    <>
      <h1>{props.DescriptionHeading}</h1>
      <p>{props.DescriptionText}</p>
    </>
  );
};

export default Description;
