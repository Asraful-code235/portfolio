"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    img: "/images/work/va-academy/5.jpeg",
    labels: "branding",
    title: "International Academy",
    sub: "Identity Design",
    link: "#",
  },
  {
    img: "/images/work/logos/3.jpeg",
    labels: "design",
    title: "Collect",
    sub: "Logo selection",
    link: "pages/project-single-logos.html",
  },
  {
    img: "/images/work/full-moon/7.jpeg",
    labels: "branding",
    title: "Untold",
    sub: "Branding",
    link: "pages/project-single-logos.html",
  },
  {
    img: "/images/work/sequential/1.jpeg",
    labels: "design",
    title: "Sequential",
    sub: "Magazine",
    link: "pages/project-single-hopscotch.html",
  },
  {
    img: "/images/blog/1.jpeg",
    labels: "photography",
    title: "Tropical Thunder",
    sub: "Photography",
    link: "pages/project-single-logos.html",
  },
  {
    img: "/images/work/harrys-2/17.jpeg",
    labels: "packaging branding",
    title: "Harry's",
    sub: "Work selection",
    link: "pages/project-single-harrys.html",
  },
];

export default function SelectedWork() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <motion.section className="section-size-1">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        className="container"
      >
        <div className="grid vcenter">
          <div className="column-6">
            <h5>Selected work</h5>
          </div>
          <div className="max-[850px]:block hidden">
            {!open ? (
              <Bars3Icon onClick={handleToggle} className="w-6 h-6" />
            ) : (
              <XMarkIcon onClick={handleToggle} className="w-6 h-6" />
            )}
          </div>
          <div className="column-6 ">
            <ul
              className={`grid-filters text-right ${open ? "open" : ""}`}
              data-target="grid"
            >
              <li>
                <a className="button link filter" href="#" data-filter="*">
                  All
                </a>
              </li>
              <li>
                <a
                  className="button link filter"
                  href="#"
                  data-filter=".design"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  className="button link filter"
                  href="#"
                  data-filter=".branding"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  className="button link filter"
                  href="#"
                  data-filter=".packaging"
                >
                  Packaging
                </a>
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          className="grid masonry columns-3 columns-tablet-2"
          whileInView={{
            opacity: [0, 1],
            y: [20, 0],
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delayChildren: 0.2,
          }}
          id="grid"
        >
          {data.map((item, index: number) => (
            <motion.div
              key={index}
              transition={{
                delay: 0.2 * index,
              }}
              className={`grid-item column ${item.labels} has-animated`}
            >
              <a className="thumb space-2 animated" href={item.link}>
                <img
                  alt="Nevo example image"
                  src={"/images/work/logos/3.jpeg"}
                />
                <div className="labels">{item.labels}</div>
                <div className="caption">
                  <div className="title">{item.title}</div>
                  <div className="sub">{item.sub}</div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
