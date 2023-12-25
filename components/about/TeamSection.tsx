const teamMembers = [
  {
    id: 1,
    name: "Herald Johnson",
    role: "Backend",
    image: "/images/team/1.jpeg",
  },
  {
    id: 2,
    name: "Jake Thompson",
    role: "UX Design",
    image: "/images/team/1.jpeg",
  },
  {
    id: 3,
    name: "Jake Thompson",
    role: "UX Design",
    image: "/images/team/1.jpeg",
  },
  {
    id: 4,
    name: "Jake Thompson",
    role: "UX Design",
    image: "/images/team/1.jpeg",
  },
  {
    id: 5,
    name: "Jake Thompson",
    role: "UX Design",
    image: "/images/team/1.jpeg",
  },
  {
    id: 6,
    name: "Jake Thompson",
    role: "UX Design",
    image: "/images/team/1.jpeg",
  },
];

export default function TeamSection() {
  return (
    <div className="container pad-3">
      <div className="grid masonry columns-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid-item column undefined">
            <div className="thumb">
              <img alt="Nevo example image" src={member.image} />
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
    </div>
  );
}
