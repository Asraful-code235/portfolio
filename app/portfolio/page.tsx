import WorkSection from "@/components/portfolio/WorkSection";

export default function page() {
  return (
    <div className="content">
      <section className="section-size-2 !py-4">
        <div className="container">
          <div className="grid">
            <div className="column-12 centered animated-text">
              <h1>Portfolio</h1>
              {/* <h4>Lightbox</h4> */}
            </div>
          </div>
        </div>
      </section>
      <WorkSection />
    </div>
  );
}
