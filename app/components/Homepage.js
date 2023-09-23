"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsData } from "../Redux/FetchCoinData";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const coinsData = useSelector((state) => state.coinsDetail.coinsDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(fetchCoinsData());
        setLoading(false);
      } catch (error) {
      }
    }

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <p className="flex justify-center items-center h-screen">Loading...</p>;
  }

  return (
    <div className="bg-green grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-3">
      {coinsData.coinsDetail.data.map((item, index) => (
        <div
          className="bg-ligth-yellow relative max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          key={index}
        >
          <div className="px-6 py-4">
            <h1>Crypto coin Data</h1>
            <div className="font-bold text-xl mb-2">Symbol: {item.symbol}</div>
            <div className="text-gray-700 text-base">Name: {item.name}</div>
            <div className="text-gray-700 text-base">Price: {item.priceUsd.slice(0,9)}</div>
            <div className="text-gray-700 text-base">24 Hour Change: {item.changePercent24Hr.slice(0,9)} %</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
