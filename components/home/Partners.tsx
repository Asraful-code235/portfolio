"use client";
import { motion } from "framer-motion";

const partnerImages = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
];

export default function Partners() {
  return (
    <motion.section className="section-size-2">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="container"
      >
        <div className="grid">
          <div className="column text-center centered text-left-mobile">
            <h5
              className="animated-text done-animating"
              style={{
                opacity: "1",
              }}
            >
              The folks we work with
            </h5>
            <div className="space-2"></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="container width-5"
      >
        <motion.div className="grid columns-5 columns-mobile-2 centered animated has-animated">
          {partnerImages.map((imageUrl, index) => (
            <div className="column image pad-1" key={index}>
              <img alt={`Partner ${index + 1}`} src={imageUrl} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
