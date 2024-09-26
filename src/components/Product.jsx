import React from "react";
import pcs from "../data";
import ProductBox from "../components/ProductBox";

const Product = () => {
  return (
    <div className="w-full mt-20">
      <h2 className="p-6 text-3xl">Pc Lists</h2>
      <div className="p-5  flex flex-wrap justify-center gap-2 ">
        {pcs && pcs.length > 0 ? (
          pcs.map((data, key) => (
            <div className="w-320px">
              <ProductBox data={data} key={key} />
            </div>
          ))
        ) : (
          <div>nothing found</div>
        )}
      </div>
    </div>
  );
};

export default Product;
