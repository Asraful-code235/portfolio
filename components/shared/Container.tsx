"use client";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../start/Footer";
import Header from "../start/Header";
import { AnimatePresence, motion } from "framer-motion";

export default function Container({ children }: { children: ReactNode }) {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
