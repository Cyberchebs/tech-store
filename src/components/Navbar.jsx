import React from "react";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../store/cart";

const navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(item => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div className="w-full bg-black h-16 p-5 lg:p-10 flex items-center justify-between fixed top-0 left-0 right-0">
      <Link to={"/"} className="flex flex-row items-center cursor-pointer">
        <FaLaptop /> <h5 className="text-2xl p-2">pc store</h5>
      </Link>
      <div className=" w-40">
        <div
          className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer float-end"
          onClick={handleOpenTabCart}
        >
          <TiShoppingCart className="w-7 h-7" />
          <span className=" absolute top-[10%] right-[70%] bg-red-600 text-white text-sm w-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
