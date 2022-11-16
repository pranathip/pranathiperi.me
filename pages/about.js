import React, { Component } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const aboutPage = () => {
  return (
    <Layout>
      <div className="grid max-w-full auto-rows-auto gap-8">
        <div className="columns mt-12 md:mt-8">
          <h2>
            <a href="https://pranathiperi.me/assets/Pranathi_Peri_Resume.pdf">
              resume →
            </a>
          </h2>
        </div>
        <div className="grid max-w-full auto-rows-auto gap-4">
          <h2>hey there! i'm a developer + designer currently based in nyc.</h2>
          <h2>
            i graduated from{" "}
            <a className="highlight" href="https://eecs.berkeley.edu/">
              the university of california, berkeley
            </a>{" "}
            in december of 2021 with a degree in electrical engineering &
            computer science and a certificate in design innovation from{" "}
            <a
              className="highlight"
              href="https://jacobsinstitute.berkeley.edu/"
            >
              berkleley's jacobs institute.
            </a>
          </h2>
          <h2>
            my specialty lies in fullstack web/mobile app development and
            design. previously i was a software engineer at meta, and a product
            designer at github creating beatiful user experiences with useful
            day-to-day applications.
          </h2>
          <h2>
            outside of work, i design clothing for my brand:{" "}
            <a className="highlight" href="https://instagram.com/durgathelabel">
              durga the label.
            </a>{" "}
            i source sustainable fabrics and textiles from vendors in india to
            create beautiful, modern clothing. while i generally hand make most
            pieces myself, i've recently been working with artisans and
            craftsmen in india to make some of my more complicated designs come
            to life.
          </h2>
          <h2>
            i'm always looking to join exciting new ventures and projects!
            please don't hesitate to reach out if you think this could be a good
            fit, or even just to chat. :)
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default aboutPage;
