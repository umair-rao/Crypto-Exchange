'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketData } from "../Redux/FetchMarketData";
import Navbar from "../components/Navbar";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const marketData = useSelector((state) => state.marketDetail.marketDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(fetchMarketData());
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
    <>
    {<Navbar/>}
    <div className="bg-orange grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-3">
      {marketData.marketDetail.data.map((item, index) => (
       <div
       className="bg-white relative max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
       key={index}
     >
       <div className="px-6 py-4">
         <div className="font-bold text-sm mb-2">Exchange Name: {item.name}</div>
         <div className="text-gray-700 text-base">Rank: {item.rank}</div>
         <div className="text-gray-700 text-base">Trading Pairs: {item.tradingPairs}</div>
       </div>
     </div>
       ))}
    </div>
    </>
  )
}

export default Page
