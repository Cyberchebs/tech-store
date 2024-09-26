import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const ProductBox = ({ data }) => {
  const carts = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const { id, brand, price, img, model, slug } = data;
  return (
    <div className=" flex flex-col gap-[20px] [320px] h-[350px] shadow-md p-2 rounded-md ">
      <Link to={slug} className="h-[200px] w-[300px]  cursor-pointer">
        <img src={img} />
      </Link>
      <div>
        <p>
          {brand} {""}
        </p>

        <h4>{model}</h4>
      </div>

      <div className=" flex justify-between items-center">
        <p>{price}</p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <IoCartOutline className=" size-5" />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
