'use client'

import { useEffect, useState } from "react";

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
<nav class="bg-teal-green p-4">
  <div class="flex justify-between items-center">
    <div class="text-white font-semibold text-xl"><a href="/">Crypto Live Market Price</a></div>
    <div className="text-white">
        <div className="time">
          <p>
            Time:
            {' '}
            {time.toLocaleTimeString()}
          </p>
        </div>
        <div className="date">
          <p>
            Date:
            {' '}
            {date}
          </p>
        </div>
      </div>
    <ul class="flex space-x-4">
      <li><a href="/Exchanges" class="text-white hover:text-gray-200">Exchanges</a></li>
      <li><a href="/About" class="text-white hover:text-gray-200">About</a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
