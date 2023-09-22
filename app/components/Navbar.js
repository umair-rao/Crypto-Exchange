
const Navbar = () => {
  return (
<nav class="bg-blue-500 p-4">
  <div class="flex justify-between items-center">
    <div class="text-white font-semibold text-xl">Crypto Exchange Website</div>
    <ul class="flex space-x-4">
      <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
      <li><a href="#" class="text-white hover:text-gray-200">About</a></li>
      <li><a href="#" class="text-white hover:text-gray-200">Services</a></li>
      <li><a href="#" class="text-white hover:text-gray-200">Portfolio</a></li>
      <li><a href="#" class="text-white hover:text-gray-200">Contact</a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
