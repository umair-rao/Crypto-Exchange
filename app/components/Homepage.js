"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsData } from "../Redux/FetchCoinData";
import { useEffect } from "react";

const Homepage = () => {
  const data = useSelector((state) => state.coinsDetail.coinsDetail);
  console.log(data, "umair");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinsData());
  }, []);

  const rates = Object.entries(data.coinsDetail.rates);
  console.log(rates, "zain");
  return (
    <div className="bg-green grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-3">
      {rates.map((item, index) => (
        <div
          className="bg-ligth-yellow max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          key={index}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Coin: {item[0]}</div>
            <div className="text-gray-700 text-base">Rate: {item[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
