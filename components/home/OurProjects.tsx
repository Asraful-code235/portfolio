"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Herald Johnson",
    role: "Backend",
  },
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Jake Thompson",
    role: "UX Design",
  },
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Tobias Dupré",
    role: "Illustration",
  },
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Liam Kim",
    role: "Frontend",
  },
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Ronald Duncan",
    role: "Photography",
  },
  {
    imgSrc: "/images/team/1.jpeg",
    name: "Lin Becker",
    role: "Marketing",
  },
  // Add more team members as needed
];

export default function OurProjects() {
  return (
    <motion.section className="section-size-2 black-bg light-text" id="team">
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
          <div
            className="column-12 text-center animated-text done-animating "
            style={{
              opacity: "1",
            }}
          >
            <h5 className="grey-text">Your project</h5>
            <h2>In the best possible hands</h2>
            <div className="space-3"></div>
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
        className="container pad-3"
      >
        <div className="grid masonry columns-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="grid-item column undefined has-animated"
            >
              <div className="thumb">
                <img alt="Nevo example image" src={member.imgSrc} />
                <ul className="labels">
                  <li>
                    <a className="button anchor-link primary" href="#">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="button anchor-link primary" href="#">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a className="button anchor-link primary" href="#">
                      Behance
                    </a>
                  </li>
                </ul>
                <div className="caption">
                  <h5 className="title">{member.name}</h5>
                  <h6 className="sub">{member.role}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="container">
        <div className="space-3"></div>
        <div className="grid">
          <div className="column-3 centered text-center animated grey-text">
            <p>
              We&apos;re a team of skilled individuals, always striving for the
              best solution. We think big, and make clients successful.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
