"use client";
import Brands from "@/components/about/Brands";
import Gallery from "@/components/about/Gallery";
import TeamSection from "@/components/about/TeamSection";
import { useDataFetching } from "@/lib/sanity";
import PortableText from "react-portable-text";

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  const data = useDataFetching(`*[_type == "about"]`);

  return (
    <div className="content">
      <section className="section-size-6 lighter-bg background-zoom">
        <img
          className="opacity-4 background"
          alt="Nevo example image"
          src="/images/studio/3.jpeg"
        />
        <div className="container">
          <div className="grid">
            <div className="column-8 centered text-center">
              <h3>We'd like to introduce to you</h3>
              <h1 className="animated-text">Our New Studio</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-size-3">
        <div className="container">
          <div className="grid">
            <div className="column-6 centered text-center">
              <h2>{(data && data[0]?.title) || "Think. Create. Iterate."}</h2>
              <div className="space-2"></div>
              <div>{data && <PortableText content={data[0]?.body} />}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-size-3 black-bg light-text" id="team">
        <div className="container">
          <div className="grid">
            <div className="column-12 text-center">
              <h5>Say hi to</h5>
              <h2>A talented team</h2>
              <div className="space-5"></div>
            </div>
          </div>
        </div>
        <TeamSection />
        <div className="container pad-3">
          <div className="grid">
            <div className="column-3 centered text-center">
              <p>
                We're a team of skilled professionals, always striving for the
                best solution. We think big, and make clients successful.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-size-2 lighter-bg">
        <div className="container">
          <div className="text-center space-4">
            <h3>We like to create things you love.</h3>
          </div>
        </div>
        <Gallery />
      </section>
      <section className="section-size-3">
        <div className="container">
          <div className="grid pad-6">
            <div className="column text-center centered">
              <h3>Brands that love us</h3>
              <p>We're so proud to work with these folks.</p>
            </div>
          </div>
        </div>
        <Brands />
      </section>
    </div>
  );
}
