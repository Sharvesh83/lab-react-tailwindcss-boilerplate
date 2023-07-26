import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 flex-wrap bg-red-400 border-t-4 border-blue-900">
      <div className="items-center mr-4">
        <span className="text-white font-bold">KALVIUM</span>
      </div>
      <div className="flex flex-1 items-center justify-between w-11/12">
        <div className="text-sm flex flex-wrap">
          <a href=" " className="mr-4 font-semibold text-gray-600">About us</a>
          <a href=" " className="mr-4 font-semibold text-gray-600">Contacts</a>
          <a href=" " className="mr-4 font-semibold text-gray-600">Courses</a>
        </div>
        <div>
          <button href=" " className="text-white border-white border rounded p-2 px-4">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
