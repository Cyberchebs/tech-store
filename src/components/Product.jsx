import React from "react";
import pcs from "../data";
import ProductBox from "../components/ProductBox";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <div className="w-full mt-20">
      <motion.h2
        initial={{ y: -250 }}
        animate={{ y: 5 }}
        transition={{ duration: 1, type: "spring", stiffness: 5 }}
        className="p-6 text-3xl"
      >
        Pc Lists
      </motion.h2>
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
