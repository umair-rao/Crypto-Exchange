'use client'

import { useDispatch, useSelector } from "react-redux"
import { fetchCoinsData } from "../Redux/FetchCoinData"

const Homepage = () => {
  const data = useSelector((state) => state.coinsDetail)
  console.log(data, 'Umair')
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchCoinsData())
  }

  return (
    <div className="h-screen">
      <button onClick={fetchData()}>Fetch Data</button>
    </div>
  )
}

export default Homepage
