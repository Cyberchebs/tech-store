import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pcs from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { motion } from "framer-motion";

const Detail = () => {
  const { slug } = useParams();
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = pcs.filter(pc => pc.slug === slug);
    if (findDetail.length > 0) {
      setDetails(findDetail[0]);
    } else {
      console.log("salamalekun");
      2;
    }
  }, [slug]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: details.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div>
      <h2 className="text-4xl text-center uppercase font-bold">PC DETAIL</h2>
      <div className="flex flex-col  lg:flex-row gap-6 mt-5 p-5 justify-center ">
        <div className="p-5 flex justify-center items-center">
          <img
            src={details.img}
            className="w-250 h-[250px] lg:h-[400] object-cover"
          />
        </div>
        <div className="flex flex-col  gap-5 width-50% justify-center p-5 ">
          <h1>
            {" "}
            <strong className="text-3xl">Brand:</strong> {details.brand}
          </h1>
          <h1>
            <strong className="text-3xl">model:</strong> {details.model}
          </h1>
          <h1>
            <strong className="text-3xl">cpu:</strong> {details.CPU}
          </h1>
          <h1>
            <strong className="text-3xl ">gpu:</strong> {details.GPU}
          </h1>
          <h1>
            <strong className="text-3xl ">price:</strong>${details.price}
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <button
              className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              onClick={handlePlusQuantity}
            >
              +
            </button>
            <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
              {quantity}
            </span>
            <button
              className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              onClick={handleMinusQuantity}
            >
              -
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.5 }}
            className="bg-slate-900 text-white px-7 rounded-xl shadow-2xl"
            onClick={handleAddToCart}
          >
            add to cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
