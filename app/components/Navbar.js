'use client'

import { useEffect, useState } from "react";

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
  const [time, setTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-teal-green p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <a href="/">Crypto Live Market Price</a>
        </div>
        <div className="text-white">
          <div className="time">
            <p>
              Time: {time.toLocaleTimeString()}
            </p>
          </div>
          <div className="date">
            <p>
              Date: {date}
            </p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <ul className="flex space-x-4">
          <li>
            <a href="/Exchanges" className="text-white hover:text-gray-200">
              Exchanges
            </a>
          </li>
          <li>
            <a href="/About" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
