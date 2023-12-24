"use client";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../start/Footer";
import Header from "../start/Header";
import { AnimatePresence, motion } from "framer-motion";

export default function Container({ children }: { children: ReactNode }) {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Handle toggle navbar
  const handleNavbar = () => setIsOpenMenu((prev) => !prev);

  // Scrolled header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <body
      className={` ${menuClicked ? "menu-opened" : ""} ${
        isScrolled ? "" : ""
      } `}
    >
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="wrapper"
        >
          <Header
            isScrolled={isScrolled}
            setMenuClicked={setMenuClicked}
            menuClicked={menuClicked}
          />
          <main>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </body>
  );
}
