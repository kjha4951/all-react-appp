import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink to="/"  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/kjha4951?tab=repositories"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://cloudeq.com/" className="hover:underline">
                            komaljha
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}