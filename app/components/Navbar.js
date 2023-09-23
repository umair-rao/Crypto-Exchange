
const Navbar = () => {
  return (
<nav class="bg-teal-green p-4">
  <div class="flex justify-between items-center">
    <div class="text-white font-semibold text-xl"><a href="/">Crypto Live Market Price</a></div>
    <ul class="flex space-x-4">
      <li><a href="/Exchanges" class="text-white hover:text-gray-200">Exchanges</a></li>
      <li><a href="/About" class="text-white hover:text-gray-200">About</a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
