"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Typed from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HomePage() {
  const ref = useRef<any>(null);
  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // autoplay: true,
  };

  return (
    <section className="nevo-slider halfscreen">
      <Swiper
        pagination={true}
        // modules={[Pagination]}
        navigation={false}
        className="mySwiper slides"
      >
        <SwiperSlide>
          <div className="slide color-bg-2">
            <img className="background z-50 " src="/images/backgrounds/5.png" />
            <div className="container">
              <div className="grid vcenter">
                <div className="inner">
                  <h1>
                    <span className="">
                      We make <br />
                      things{" "}
                    </span>
                    <Typed
                      className="typed color-text-1"
                      strings={["vibrant.", "beautiful.", "dope!"]}
                      typeSpeed={80}
                      backSpeed={50}
                      loop
                      fadeOut
                      contentType={null}
                      showCursor={false}
                    />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide light-text background-zoom">
            <img className="background " src="/images/backgrounds/4.jpeg" />
            <div className="container">
              <div className="grid vcenter">
                <div className="inner">
                  <h1
                    className="animated-text done-animating"
                    style={{
                      opacity: "1",
                    }}
                  >
                    Projects.
                  </h1>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide light-text bg-black bg-opacity-40">
            <div className="background">
              <video
                className="opacity-5"
                muted
                autoPlay
                loop
                poster="/videos/video_01.jpg"
              >
                <source src="/videos/video_01.mp4" type="video/mp4" />
                <source src="/videos/video_01.webm" type="video/webm" />
              </video>
            </div>
            <div className="container">
              <div className="grid center text-center">
                <div className="inner">
                  <h4>No audience?</h4>
                  <h1
                    className="animated-text done-animating"
                    style={{
                      opacity: "1",
                    }}
                  >
                    We hear you.
                  </h1>
                  <a className="button tertiairy" href="pages/contact.html">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
