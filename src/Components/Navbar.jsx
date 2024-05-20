import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-[90%] bg-gray-50">
      <img src="/images/fc-logo.png" alt="" />
      <div className="search">
        <input type="text" placeholder='Search..' />

      </div>
      <ul className="flex gap-4">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <button>Login</button>
      </ul>
    </div>
  )
}

export default Navbar
