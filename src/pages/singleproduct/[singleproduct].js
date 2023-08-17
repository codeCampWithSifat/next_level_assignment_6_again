import RootLayout from "@/Components/Layout/RootLayout";
import React from "react";

const SingleProduct = () => {
  return <div>SingleProduct</div>;
};

export default SingleProduct;

SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout> {page}</RootLayout>;
};
