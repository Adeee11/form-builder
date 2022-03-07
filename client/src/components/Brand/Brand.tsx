import React from "react";
import { BrandContainer } from "./Brand.styles";

const Brand = (props: { brandName: string | React.ReactNode }) => {
  const { brandName } = props;
  return (
    <>
      {typeof brandName === typeof "" ? (
        // string prop
        <BrandContainer>{brandName}</BrandContainer>
      ) : (
        // Component prop
        brandName
      )}
    </>
  );
};

export default Brand;
