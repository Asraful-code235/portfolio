const galleryItems = [
  {
    id: 1,
    category: "design",
    title: "Keth Woogate",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
  {
    id: 2,
    category: "branding",
    title: "Newday",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
  {
    id: 3,
    category: "design",
    title: "The Collect Club",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
  {
    id: 4,
    category: "design",
    title: "The Collect Club",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
  {
    id: 5,
    category: "design",
    title: "The Collect Club",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
  {
    id: 6,
    category: "design",
    title: "The Collect Club",
    subtitle: "Logo",
    image: "/images/work/logos/1.jpeg",
  },
];

export default function Gallery() {
  return (
    <div className="container">
      <div className="grid masonry gallery columns-3">
        <div className="grid-sizer"></div>
        {galleryItems.map((item) => (
          <div key={item.id} className={`grid-item column ${item.category}`}>
            <a
              className="thumb space-3"
              href="../pages/project-single-logos.html"
            >
              <img alt="Nevo example image" src={item.image} />
              <div className="labels">{item.category}</div>
              <div className="caption">
                <div className="title">{item.title}</div>
                <div className="sub">{item.subtitle}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
