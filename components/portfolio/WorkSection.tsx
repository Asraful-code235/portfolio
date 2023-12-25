const workItems = [
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
];

export default function WorkSection() {
  return (
    <section className="section-size-2 !pt-0">
      <div className="container">
        <div className="grid masonry gallery columns-3">
          <div className="grid-sizer"></div>
          {workItems.map((item) => (
            <div key={item.id} className={`grid-item column ${item.category}`}>
              <a className="thumb space-2 lightbox animated" href={item.image}>
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
    </section>
  );
}
