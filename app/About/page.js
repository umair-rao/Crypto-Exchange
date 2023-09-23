import Navbar from "../components/Navbar";


const about = () => {
  return (
    <>
    {<Navbar/>}
    <div className="h-screen container mx-auto p-8 bg-blue-100">
        <h1 className="text-3xl font-semibold text-center text-gray-800">About</h1>
      <p class="mt-4 text-lg text-center text-gray-600">
        Market enthusiasts can access real-time data like price charts and
        trading volumes in the "Market Data" area. Information on cryptocurrency
        wallets, exchanges, educational resources, and guides can be found in
        dedicated sections. Investment opportunities are covered in sections
        detailing initial coin offerings (ICOs), security token offerings
        (STOs), and token sales. Community forums, event listings, resources,
        and legal information offer a comprehensive platform for cryptocurrency
        enthusiasts and investors to engage with the crypto world.
      </p>
    </div>
    </>
  );
};

export default about;
