import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import logo1 from "../../assets/png/logo-no-background.png";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div
        className={`navContainer ${scrolled ? "bg-primary" : "bg-transparent"}`}
      >
        <Link
          to="/"
          className="logoLink"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo1} alt="logo" className="myLogo" />
          <p className="logoDesc">
            Abdee &nbsp;
            <span> | Web Dev </span>
          </p>
        </Link>

        <ul className="listMenu">
          {navLinks.map((nav) => (
            <li key={nav.id} className="" onClick={() => setActive(nav.title)}>
              <a
                className={`${
                  active === nav.title ? "activeLink" : "notActiveLink"
                } menulinks`}
                onClick={() => setActive(nav.title)}
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="toggleMenu ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="toggleIcon"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } hiddenMenuContainer  black-gradient`}
          >
            <ul className="hiddenMenu">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    className={`hiddenLinks ${
                      active === nav.title ? "activeLink" : "notActiveLink"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    href={`#${nav.id}`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
