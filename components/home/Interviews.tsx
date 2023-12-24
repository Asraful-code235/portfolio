"use client";
import { motion } from "framer-motion";

export default function Interviews() {
  return (
    <motion.section className="section-size-2 lighter-bg">
      <motion.div className="container">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [20, 0],
          }}
          className="grid "
        >
          <div className="column-3 column-tablet-6 column-mobile-12">
            <h5>Interviews</h5>
            <ul className="list">
              <li>The New York Times</li>
              <li>Boston Herald</li>
              <li>Bloomberg</li>
              <li>Computer Science</li>
            </ul>
          </div>
          <div className="column-3 column-tablet-6 column-mobile-12">
            <h5>Awards</h5>
            <ul className="list">
              <li>Red Dot Award 2018</li>
              <li>Golden Design 2017</li>
              <li>Red Dot Award 2017</li>
              <li>Rams Winner 2016</li>
            </ul>
          </div>
          <div className="column-3 column-tablet-6 column-mobile-12">
            <h5>Publications</h5>
            <ul className="list">
              <li>The New York Times</li>
              <li>Digital Mag</li>
              <li>Online.com</li>
              <li>Digital Heroes</li>
            </ul>
          </div>
          <div className="column-3 column-tablet-6 column-mobile-12">
            <h5>Nominations</h5>
            <ul className="list">
              <li>Red Dot Award 2018</li>
              <li>Golden Design Nominee</li>
              <li>Red Dot Award 2017</li>
              <li>Rams Winner 2016</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
