import React, { useEffect, useState } from "react";
import pcs from "../data";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

const CartItem = ({ item }) => {
  const { productId, quantity } = item;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = pcs.filter(pc => pc.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between gap-4 items-center bg-slate-500 text-white  p-2 border-b-2  border-slate-700 rounded-md">
      <img src={detail.img} alt="" className="w-12" />
      <h3>{detail.model}</h3>
      <p>{detail.price * quantity}</p>

      <div className="w-20 flex justify-between">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 flex items-center justify-center"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 flex items-center justify-center"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
