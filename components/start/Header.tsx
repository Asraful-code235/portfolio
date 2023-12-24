interface HeaderProps {
  setMenuClicked: (value: boolean) => void;
  menuClicked: boolean;
  isScrolled: boolean;
}

export default function Header({
  setMenuClicked,
  menuClicked,
  isScrolled,
}: HeaderProps) {
  return (
    <>
      <header
        className={`header transition-transform duration-1000 delay-1000 ${
          isScrolled
            ? "!fixed !h-20 md:!h-12 !top-0 !left-0 !right-0 !-translate-y-100 hidden bg-white"
            : ""
        } `}
      >
        <a className="brand" href="index.html">
          {" "}
          <img
            className="default"
            alt="Nevo example image"
            src="/images/logo.svg"
          />
          <img
            className="white"
            alt="Nevo example image"
            src="/images/logo-white.svg"
          />
        </a>
        <ul className="menu main">
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="index.html">
              Home
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="index.html">
                  Studio
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="index-freelancer.html">
                  Freelancer
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/about-studio.html">
              About
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/about-studio.html">
                  Studio
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/about-freelancer.html">
                  Freelancer
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/elements.html">
              Features
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/elements.html">
                  Elements
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/alt-menu.html">
                  Alternative Menu
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/one-pager.html">
                  One-page website
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/error.html">
                  Error page
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/portfolio-default.html">
              Portfolio
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-default.html">
                  Default
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-lightbox.html">
                  Lightbox
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-masonry.html">
                  Masonry
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-no-space.html">
                  No-space
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link"
                  href="pages/portfolio-random-space.html"
                >
                  Random-space
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-filters.html">
                  Filterable
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link"
                  href="pages/project-single-harrys.html"
                >
                  Single Project
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/blog.html">
              Blog
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/blog.html">
                  Blog
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/blog-single.html">
                  Single post
                </a>
              </li>
              <li className="menu-item"></li>
            </ul>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="pages/contact.html">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu about">
          <p>
            My goal is to make the digital world more beautiful. I believe that
            true craftmanship stands out with passion.
          </p>
        </div>
        <ul className="menu social">
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              Instagram
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              Behance
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </header>
      <div onClick={() => setMenuClicked(!menuClicked)} className="burger">
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
}
