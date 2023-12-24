export default function HomePage() {
  return (
    <>
      <div className="content">
        <section className="nevo-slider halfscreen">
          <div className="slides">
            <div className="slide color-bg-2">
              <img
                className="background"
                src="assets/images/backgrounds/5.png"
              />
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
              <img
                className="background"
                src="assets/images/backgrounds/4.jpg"
              />
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
                <video
                  className="opacity-5"
                  loop
                  poster="assets/videos/video_01.jpg"
                >
                  <source src="assets/videos/video_01.mp4" type="video/mp4" />
                  <source src="assets/videos/video_01.webm" type="video/webm" />
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
        <section className="section-size-1">
          <div className="container">
            <div className="grid vcenter">
              <div className="column-6">
                <h5>Selected work</h5>
              </div>
              <div className="column-6">
                <ul className="grid-filters text-right" data-target="grid">
                  <li>
                    <a className="button link filter" href="#" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="button link filter"
                      href="#"
                      data-filter=".design"
                    >
                      Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="button link filter"
                      href="#"
                      data-filter=".branding"
                    >
                      Branding
                    </a>
                  </li>
                  <li>
                    <a
                      className="button link filter"
                      href="#"
                      data-filter=".packaging"
                    >
                      Packaging
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid masonry columns-3 columns-tablet-2" id="grid">
              <div className="grid-sizer"></div>
              <div className="grid-item column branding">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-logos.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/va-academy/5.jpg"
                  />
                  <div className="labels">branding</div>
                  <div className="caption">
                    <div className="title">Internation Academy</div>
                    <div className="sub">Identity Design</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column design">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-logos.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/logos/3.jpg"
                  />
                  <div className="labels">design</div>
                  <div className="caption">
                    <div className="title">Collect</div>
                    <div className="sub">Logo selection</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column branding">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-logos.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/full-moon/7.jpg"
                  />
                  <div className="labels">branding</div>
                  <div className="caption">
                    <div className="title">Untold</div>
                    <div className="sub">Branding</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column design">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-hopscotch.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/sequential/1.jpg"
                  />
                  <div className="labels">design</div>
                  <div className="caption">
                    <div className="title">Sequential</div>
                    <div className="sub">Magazine</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column photography">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-logos.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/blog/1.jpg"
                  />
                  <div className="labels">photography</div>
                  <div className="caption">
                    <div className="title">Tropical Thunder</div>
                    <div className="sub">Photography</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column packaging branding">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-harrys.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/harrys-2/17.jpg"
                  />
                  <div className="labels">packaging branding</div>
                  <div className="caption">
                    <div className="title">Harry&apos;s</div>
                    <div className="sub">Work selection</div>
                  </div>
                </a>
              </div>
              <div className="grid-item column branding">
                <a
                  className="thumb space-2 animated"
                  href="pages/project-single-logos.html"
                >
                  <img
                    alt="Nevo example image"
                    src="assets/images/work/logos/18.jpg"
                  />
                  <div className="labels">branding</div>
                  <div className="caption">
                    <div className="title">Farber Law</div>
                    <div className="sub">Work selection</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-size-2 lighter-bg">
          <div className="container">
            <div className="grid">
              <div className="column-12 text-center text-left-mobile animated-text">
                <h2>It@apos;s true.</h2>
                <h5 className="grey-text">Small things make you big.</h5>
                <div className="space-3"></div>
              </div>
            </div>
            <div className="grid">
              <div className="column-12 image">
                <img alt="Nevo example image" src="assets/images/blog/9.jpg" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="space-4"></div>
            <div className="grid center text-center">
              <div className="column-6">
                <p className="font-size-3 grey-text">
                  We&apos;re a team of experts, striving long term solutions. We
                  think big and take on every challenge that comes across our
                  path.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-size-2 black-bg light-text" id="team">
          <div className="container">
            <div className="grid">
              <div className="column-12 text-center animated-text">
                <h5 className="grey-text">Your project</h5>
                <h2>In the best possible hands</h2>
                <div className="space-3"></div>
              </div>
            </div>
          </div>
          <div className="container pad-3">
            <div className="grid masonry columns-3">
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/1.jpg"
                  />
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
                    <h5 className="title">Herald Johnson</h5>
                    <h6 className="sub">Backend</h6>
                  </div>
                </div>
              </div>
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/1b.jpg"
                  />
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
                    <h5 className="title">Jake Thompson</h5>
                    <h6 className="sub">UX Design</h6>
                  </div>
                </div>
              </div>
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/2.jpg"
                  />
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
                    <h5 className="title">Tobias Dupré</h5>
                    <h6 className="sub">Illustration</h6>
                  </div>
                </div>
              </div>
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/2b.jpg"
                  />
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
                    <h5 className="title">Liam Kim</h5>
                    <h6 className="sub">Frontend</h6>
                  </div>
                </div>
              </div>
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/3b.jpg"
                  />
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
                    <h5 className="title">Ronald Duncan</h5>
                    <h6 className="sub">Photography</h6>
                  </div>
                </div>
              </div>
              <div className="grid-item column undefined">
                <div className="thumb">
                  <img
                    alt="Nevo example image"
                    src="assets/images/team/3.jpg"
                  />
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
                    <h5 className="title">Lin Becker</h5>
                    <h6 className="sub">Marketing</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="space-3"></div>
            <div className="grid">
              <div className="column-3 centered text-center animated grey-text">
                <p>
                  We&apos;re a team of skilled individuals, always striving for
                  the best solution. We think big, and make clients successful.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-size-2 lighter-bg">
          <div className="container">
            <div className="grid animated">
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
            </div>
          </div>
        </section>
        <section className="section-size-2">
          <div className="container">
            <div className="grid">
              <div className="column text-center centered text-left-mobile">
                <h5 className="animated-text">The folks we work with</h5>
                <div className="space-2"></div>
              </div>
            </div>
          </div>
          <div className="container width-5">
            <div className="grid columns-5 columns-mobile-2 centered animated">
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/1.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/2.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/3.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/4.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/5.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/6.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/7.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/10.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/9.png"
                />
              </div>
              <div className="column image pad-1">
                <img
                  alt="Nevo example image"
                  src="assets/images/brands/8.png"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
