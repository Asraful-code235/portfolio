"use client";
import { ReactNode, useState } from "react";
import Footer from "../start/Footer";
import Header from "../start/Header";

export default function Container({ children }: { children: ReactNode }) {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <body className={`scrolled-up ${menuClicked ? "menu-opened" : ""}`}>
      <div className="wrapper">
        <Header setMenuClicked={setMenuClicked} menuClicked={menuClicked} />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  );
}
