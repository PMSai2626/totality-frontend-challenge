"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, updatedQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0 )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <div className="flex flex-col space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg flex overflow-hidden shadow-lg mb-4 items-center p-2 "
              >
                <Image
                  src={item.image || "/default-image.jpg"}
                  className=" object-cover w-32 h-40 mr-4"
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <div className="justify-cente">
                  <h2 className="text-xl font-semibold">{item.title} </h2>
                  <p className="text-lg font-bold mt-2">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-lg font-bold mt-2">
                    Items: {item.quantity}
                  </p>

                  <div className="flex mt-2 m-1">
                    <button
                      className="mt-2 ml-2 bg-blue-500 text-white px-4  rounded hover:bg-blue-600"
                      onClick={() =>
                        updatedQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="mt-2 ml-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() =>
                        item.quantity > 0 &&
                        updatedQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="mt-2 ml-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
          <div className="text-lg font-bold mt-4">
          <p>Total Items: {totalItems} </p>
          <p>Total Price: ${totalPrice.toFixed(2)} </p>
          </div>
          <button
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => router.push("/payment")}
                >
                  Go to payment
                </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
