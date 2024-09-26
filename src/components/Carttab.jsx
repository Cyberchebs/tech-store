// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CartItem from "./CartItem";
// import { toggleStatusTab } from "../store/cart";

// const Carttab = () => {
//   const carts = useSelector(store => store.cart.items);
//   const statusTab = useSelector(store => store.cart.statusTab);
//   const dispatch = useDispatch();

//   const handleCloseTabCart = () => {
//     dispatch(toggleStatusTab());
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 bg-black shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] z-50 transform transition-transform duration-500 ${
//         statusTab === true ? "" : "translate-x-full"
//       }`}
//     >
//       <h2 className="p-5 text-white text-2xl">shopping-cart</h2>
//       <div className="p-5 ">
//         {carts.map((item, key) => (
//           <CartItem item={item} key={key} />
//         ))}
//       </div>
//       <div className="grid grid-cols-2">
//         <button className="bg-black text-m" onClick={handleCloseTabCart}>
//           CLOSE
//         </button>
//         <button className="bg-gray-100">CHECKOUT</button>
//       </div>
//     </div>
//   );
// };

// export default Carttab;

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../store/cart";
import pcs from "../data"; // Make sure to import the pcs data

const Carttab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return carts.reduce((total, item) => {
      const product = pcs.find(pc => pc.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }, [carts]);

  return (
    <div
      className={`fixed top-0 right-0 bg-black shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_auto] z-50 transform transition-transform duration-500 ${
        statusTab === true ? "" : "translate-x-full"
      }`}
    >
      <h2 className="p-5 text-white text-2xl">shopping-cart</h2>
      <div className="p-5 flex flex-col gap-2 overflow-y-auto">
        {carts.map((item, key) => (
          <CartItem item={item} key={key} />
        ))}
      </div>
      <div className="p-5 bg-gray-800 text-white">
        <p className="text-xl mb-4 text-white">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded"
            onClick={handleCloseTabCart}
          >
            CLOSE
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carttab;
