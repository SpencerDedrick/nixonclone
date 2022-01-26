import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch(fetchProducts()));
  }, [dispatch]);

  return <div></div>;
};

export default Products;
