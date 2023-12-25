"use client";

import { useState } from "react";
import CaseStudyModal from "../shared/CaseStudyModal";

const workItems = [
  {
    id: 1,
    category: "design",
    title: "Keth Woogate",
    subtitle: "Logo",
    image: "/demo.webp",
  },
  {
    id: 2,
    category: "branding",
    title: "Newday",
    subtitle: "Logo",
    image: "/demo.webp",
  },
];

export default function WorkSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };
  return (
    <section className="section-size-2 !pt-0">
      <div className="container">
        <div className="grid masonry gallery columns-3">
          <div className="grid-sizer"></div>
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`grid-item column ${item.category}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="thumb space-2" data-index={index}>
                <img alt="Nevo example image" src={item.image} />
                <div className="labels">{item.category}</div>
                <div className="caption">
                  <div className="title">{item.title}</div>
                  <div className="sub">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <CaseStudyModal
          data={selectedItem}
          open={!!selectedItem}
          // @ts-ignore
          setOpen={setSelectedItem}
        />
      )}
    </section>
  );
}
