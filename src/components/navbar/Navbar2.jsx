import { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3, HiOutlineChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("data-mode", "light");
    }
  }, [theme]);

  return (
    <>
      {/* <header
        data-aos="fade"
        data-aos-duration="300"
        className=" sticky top-0 z-[99] border-b-[1px] border-primary/50 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg"
      >
        <nav className="container mx-auto flex h-[70px] items-center justify-between px-4 py-2 ">
          <div className="flex items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md transition duration-300 hover:shadow-xl sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover"
                style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
              />
            </div>
            <div className="ml-3 text-lg sm:text-xl md:text-2xl">
              <NavLink
                to="/"
                className="flex items-center font-serif tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  EDEN
                </span>
                <span className="ml-1 inline-block font-bold text-primary drop-shadow-lg">
                  BIRDS
                </span>
              </NavLink>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-3">
              <li className="group relative cursor-pointer">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2"
                  }
                >
                  Hover Here{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </NavLink>
                <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/team"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Meet Our Executive Team
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/Cloud"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <NavLink
                        to="/privacy"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-2 text-red-500"
                            : "flex items-center gap-2"
                        }
                      >
                        Privacy policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2"
                  }
                >
                  Services{" "}
                  <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
                  <div className="flex gap-4 p-4">
                    <div className="w-36 overflow-hidden">
                      <img
                        className="rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Service"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">Best Selling</h1>
                        <p className="text-sm text-gray-600">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Development
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Cloud"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Big Data Analysis & Dashboard Design
                              </NavLink>
                            </li>
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Regular Services
                              </NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Web"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Web Development
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Other Services
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/IOS"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                iOS App Development
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Mobile"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Mobile App Development
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <NavLink
                  to="/technologies/frontend"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2"
                  }
                >
                  Technologies
                  <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
                  <div className="flex gap-4 p-4">
                    <div className="w-36 overflow-hidden">
                      <img
                        className="rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Service"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">
                          Our Technologies
                        </h1>
                        <p className="text-sm text-gray-600">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Technologies
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/technologies/frontend"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Frontend Technology
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold">Other</h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/technologies/backend"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Backend Technology
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <NavLink
                  to="/products/govt"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2"
                  }
                >
                  Our Products
                  <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
                  <div className="flex gap-4 p-4">
                    <div className="w-36 overflow-hidden">
                      <img
                        className="rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Service"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">Our Products</h1>
                        <p className="text-sm text-gray-600">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Products
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/govt"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Govt
                              </NavLink>
                            </li>
                            <li className="mb-2 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/seo"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                SEO Agencies
                              </NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/financial"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Financial
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold">
                            Other Products
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/corporate"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Corporate
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/ecommerce"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Ecommerce
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="relative cursor-pointer">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-red-500 transition duration-300 hover:from-blue-700 hover:to-blue-900"
                      : "flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-white transition duration-300 hover:from-blue-700 hover:to-blue-900"
                  }
                >
                  Career
                  <span className="absolute right-0 top-0 -mr-2 -mt-2 animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    New!
                  </span>
                </NavLink>
              </li>
              <div className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 p-2 shadow-lg">
                <li className="list-none">
                  <BiPhoneCall className="h-[40px] w-[40px] transform rounded-full bg-primary p-2 text-2xl text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-primary/90" />
                </li>
                <li className="list-none">
                  <div>
                    <p className="text-sm text-white">Call us on</p>
                    <p className="text-lg font-semibold text-white">
                      <a href="tel:01842781978" className="hover:underline">
                        01842781978
                      </a>
                    </p>
                  </div>
                </li>
              </div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer text-2xl"
                />
              )}
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="cursor-pointer text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header> */}

      <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-blue-500/30 to-blue-300/30 text-black shadow-lg dark:text-white">
        <div className="container">
          <nav className="flex h-[80px] items-center justify-between gap-4 p-2">
            <div className=" flex items-center">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  className="h-full w-full object-cover"
                  style={{
                    filter: theme === "dark" ? "invert(1)" : "invert(0)",
                  }}
                />
              </div>
              <div className="ml-3 text-lg sm:text-xl md:text-2xl">
                <NavLink
                  to="/"
                  className="flex items-center tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
                >
                  <span className="font-bold text-primary">EDEN</span>
                  <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                    BIRDS
                  </span>
                </NavLink>
              </div>
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <ul className="flex items-center gap-3">
                <li className="group relative cursor-pointer">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                        isActive && ""
                      }`
                    }
                  >
                    Hover Here
                    <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                    <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-2 text-black backdrop-blur-xl">
                      <ul className="flex flex-col gap-1 text-white">
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/about"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/team"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Meet Our Executive Team
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/OurService"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Services
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Contact
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Blogs
                          </NavLink>
                        </li>
                        <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                          <NavLink
                            to="/privacy"
                            className={({ isActive }) =>
                              `flex items-center gap-2 ${
                                isActive ? "text-amber-500" : "text-white/80"
                              }`
                            }
                          >
                            Privacy policy
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="group relative cursor-pointer">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                        isActive && ""
                      }`
                    }
                  >
                    Services
                    <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                    <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                      <div className="flex w-80 flex-col gap-4">
                        <div className="flex gap-4">
                          <div className="h-36 w-36 shrink-0 overflow-hidden">
                            <img
                              className="rounded-lg"
                              src="https://picsum.photos/200"
                              alt="Service"
                            />
                          </div>
                          <div className="mb-4">
                            <h1 className="text-lg font-semibold">
                              Best Selling
                            </h1>
                            <p className="text-sm text-white/70">
                              Explore our top-rated services tailored to meet
                              your needs.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h2 className="mb-2 text-lg font-semibold">
                                Development
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-2 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/OurService"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Big Data Analysis & Dashboard Design
                                  </NavLink>
                                </li>
                                <li className="mb-2 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Regular Services
                                  </NavLink>
                                </li>
                                <li className="cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/Web"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Web Development
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h2 className="mb-2 text-lg font-semibold">
                                Other Services
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/IOS"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    iOS App Development
                                  </NavLink>
                                </li>
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/Mobile"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Mobile App Development
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group relative cursor-pointer">
                  <NavLink
                    to="/technologies/frontend"
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                        isActive && ""
                      }`
                    }
                  >
                    Technologies
                    <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                    <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <div className="h-36 w-36 shrink-0 overflow-hidden">
                            <img
                              className="rounded-lg"
                              src="https://picsum.photos/200"
                              alt="Service"
                            />
                          </div>
                          <div className="mb-4">
                            <h1 className="whitespace-nowrap text-lg font-semibold">
                              Our Technologies
                            </h1>
                            <p className="text-sm text-white/70">
                              Explore our top-rated services tailored to meet
                              your needs.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Technologies
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/technologies/frontend"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Frontend Technology
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Other
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/technologies/backend"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Backend Technology
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group relative cursor-pointer">
                  <NavLink
                    to="/products/govt"
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                        isActive && ""
                      }`
                    }
                  >
                    Our Products
                    <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                    <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <div className="h-36 w-36 shrink-0 overflow-hidden">
                            <img
                              className="rounded-lg"
                              src="https://picsum.photos/200"
                              alt="Service"
                            />
                          </div>
                          <div className="mb-4">
                            <h1 className="whitespace-nowrap text-lg font-semibold">
                              Our Products
                            </h1>
                            <p className="text-sm text-white/70">
                              Explore our top-rated services tailored to meet
                              your needs.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Products
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/products/govt"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Govt
                                  </NavLink>
                                </li>
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/products/seo"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    SEO Agencies
                                  </NavLink>
                                </li>
                                <li className="cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/products/financial"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Financial
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Other Products
                              </h2>
                              <ul className="flex flex-col gap-1">
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/products/corporate"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Corporate
                                  </NavLink>
                                </li>
                                <li className="mb-3 cursor-pointer hover:text-primary">
                                  <NavLink
                                    to="/products/ecommerce"
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 ${
                                        isActive
                                          ? "text-amber-500"
                                          : "text-white/70 hover:text-white"
                                      }`
                                    }
                                  >
                                    Ecommerce
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                        isActive && ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden items-center gap-5 lg:flex">
              <button
                className="flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2"
                onClick={() =>
                  theme == "light" ? setTheme("dark") : setTheme("light")
                }
              >
                {theme === "dark" ? (
                  <BiSolidSun className="h-6 w-6 shrink-0" />
                ) : (
                  <BiSolidMoon className="h-6 w-6 shrink-0" />
                )}
              </button>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `relative  flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 font-bold uppercase text-white transition duration-300 hover:from-blue-700 hover:to-blue-900`
                }
              >
                Career
                <span className="absolute right-0 top-0 -mr-2 -mt-2 animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                  New!
                </span>
              </NavLink>
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 py-1.5 pl-2 pr-4 shadow-lg">
                <div className="rounded-full bg-primary p-2 text-lg text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-primary/90">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm leading-none text-white">Call us on</p>
                  <p className="text-lg font-semibold leading-none text-white">
                    <a href="tel:01842781978" className="hover:underline">
                      01842781978
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer text-2xl"
                />
              )}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </nav>
        </div>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
