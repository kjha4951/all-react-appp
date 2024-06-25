import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}