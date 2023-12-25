export default function HomePage() {
  return (
    <section className="nevo-slider halfscreen">
      <div className="slides">
        <div className="slide color-bg-2">
          <img className="background" src="/images/backgrounds/5.png" />
          <div className="container">
            <div className="grid vcenter">
              <div className="inner">
                <h1>
                  <span className="animated-text">
                    We make <br />
                    things{" "}
                  </span>
                  <span className="typed color-text-1"></span>
                  <div className="typed-content">
                    <div className="sentence">vibrant.</div>
                    <div className="sentence">beautiful.</div>
                    <div className="sentence">dope!</div>
                  </div>
                </h1>
                <a
                  className="button primary"
                  href="pages/portfolio-random-space.html"
                >
                  See. Believe.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide light-text background-zoom">
          <img className="background" src="/images/backgrounds/4.jpg" />
          <div className="container">
            <div className="grid vcenter">
              <div className="inner">
                <h1 className="animated-text">Projects.</h1>
                <h4>We nail them.</h4>
                <a
                  className="button tertiairy"
                  href="pages/portfolio-random-space.html"
                >
                  View work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide light-text black-bg">
          <div className="background">
            <video className="opacity-5" loop poster="/videos/video_01.jpg">
              <source src="/videos/video_01.mp4" type="video/mp4" />
              <source src="/videos/video_01.webm" type="video/webm" />
            </video>
          </div>
          <div className="container">
            <div className="grid center text-center">
              <div className="inner">
                <h4>No audience?</h4>
                <h1 className="animated-text">We hear you.</h1>
                <a className="button tertiairy" href="pages/contact.html">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
