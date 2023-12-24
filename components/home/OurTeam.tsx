/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

export default function OurTeam() {
  return (
    <motion.section
      whileInView={{
        opacity: [0, 1],
        y: [20, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="section-size-2 lighter-bg"
    >
      <motion.div className="container">
        <div className="grid">
          <div
            className="column-12 text-center text-left-mobile animated-text done-animating "
            style={{
              opacity: "1",
            }}
          >
            <h2>It's true.</h2>
            <h5 className="grey-text">Small things make you big.</h5>
            <div className="space-3"></div>
          </div>
        </div>
        <div className="grid">
          <div className="column-12 image">
            <img alt="Nevo example image" src="/images/blog/9.jpeg" />
          </div>
        </div>
      </motion.div>
      <motion.div className="container">
        <div className="space-4"></div>
        <div className="grid center text-center">
          <div className="column-6">
            <p className="font-size-3 grey-text">
              We&apos;re a team of experts, striving long term solutions. We
              think big and take on every challenge that comes across our path.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
