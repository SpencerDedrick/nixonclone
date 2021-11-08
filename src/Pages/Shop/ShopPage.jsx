import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import HomeProductSlider from "../Home/HomeProductSlider";

function ShopPage(props) {
  let { products, filteredProducts } = props;
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => {
          return (
            <Link to={`/${products[product].name}`}>
              <div className="py-5">
                <img
                  className="w-44 m-auto py-3"
                  src={products[product].image}
                  alt={products[product].name}
                />
                <div className="flex justify-center pb-5">
                  <img
                    src={products[product].photos[0]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                  <img
                    src={products[product].photos[1]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                  <img
                    src={products[product].photos[2]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium rounded-full border-black border-2 m-auto px-3 w-24">
                    {products[product].flair}
                  </p>
                  <h1 className="font-bold text-2xl py-2">
                    {products[product].name}
                  </h1>
                  <p>${products[product].price}.00</p>
                  <StarRatingComponent editing={false} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <HomeProductSlider />
    </div>
  );
}

export default ShopPage;
