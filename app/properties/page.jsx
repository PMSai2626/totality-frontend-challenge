"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { fetchProducts } from "../lib/api";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const Properties = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const lastIndex = currentPage * itemsPerPage;
  const firstindex = lastIndex - itemsPerPage;
  const records = products.slice(firstindex, lastIndex);
  const npage = Math.ceil(products.length / itemsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  const handleBookNow = (item) => {
    const itemwithImage = {
      ...item,
      image: item.images[0] || "/default-image.jpg",
    };
    addToCart(itemwithImage);
    router.push("/cart");
  };

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function presentNum(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold  mb-4">Properties List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {records.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={item.images[0] || "/default-image.jpg"}
              alt={item.title}
              className="w-full h-48 object-cover"
              height={400}
              width={300}
            />
            <div className="p-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <p className="text-lg font-bold mt-2"></p>
              <p className="text-lg font-bold mt-2">$ {item.price}</p>
              <div className="flex justify-center">
                <button
                  className="mt-4 bg-blue-500 text-white  px-4 py-2 rounded hover:bg-blue-600 transition-opacity duration-300 "
                  onClick={() => handleBookNow(item)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className="mt-4">
        <ul className="flex list-none justify-center">
          <li className="mx-2">
            <button className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={prevPage}>Prev</button>
          </li>
          {numbers.map((num) => (
            <>
              <li className="" key={num}>
                <button className={`mx-2 px-3 py-2 rounded ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400' } `} onClick={() => presentNum(num)}>{num} </button>
              </li>
            </>
          ))}
          <li className="mx-2">
            <button className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"  onClick={nextPage}>Next </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Properties;
