import React from "react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="flex justify-between items-center px-10 py-4 bg-white">
        {/* Logo */}
        <div className="text-xl font-bold text-sky-600">LOGO</div>

        <ul className="flex items-center gap-8">
  <li>

 //test 4
   <a href="#"
  className="!text-black font-medium hover:!text-sky-600">
      Home
   </a>

  </li>
  <li>
    <a href="#" 
  className="!text-black font-medium hover:!text-sky-600">
      About us
    </a>
  </li>
  <li>
    <a href="#" className="!text-black font-medium hover:!text-sky-600">
      Services
    </a>
  </li>
  <li>
    <a href="#" className="!text-black font-medium hover:!text-sky-600">
      Blog
    </a>
  </li>
</ul>



        {/* Button */}
        <a
  href="#"
  className="bg-sky-600 !text-white px-5 py-2 rounded-md hover:bg-sky-700">
  Contact us
</a>

      </nav>
    </header>
  );
};

export default Navbar;