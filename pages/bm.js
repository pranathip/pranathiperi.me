import React, { Component } from "react";
import Layout from "../components/Layout";

const homePage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="mb-6">
          <h2 className="text-tertiary">description</h2>
          <p className="text-secondary">
            served as product design lead for{" "}
            <a
              className="highlight"
              href="https://apps.apple.com/us/app/berkeley-mobile/id912243518"
            >
              berkeley mobile
            </a>{" "}
            - uc berkeley's flagship campus mobile application available for
            download on the app store, and used by thousands of students each
            day. in addition to general design updates/changes, led the design
            of two covid-related application features: studypact (remote
            study-partner finding service), and the covid-19 dashboard (with
            covid test booking and live-updated campus covid statistics). in
            addition to working with both iOS and android development teams to
            push out new and improved features, designed marketing and
            presentation materials as well as improved branding and typography
            guidelines.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">tools</h2>
          <p className="text-secondary">
            Figma / Procreate / InVision Design Studio / Flowmapp / Adobe CC /
            Objective-C
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">timeline</h2>
          <p className="text-secondary">august 2020 - december 2021</p>
        </div>
      </div>
      <div className="w-full drop-shadow-lg">
        <img className="mb-5" src="./images/bm/bmappstore.png"></img>
        <div className="grid grid-cols-4 gap-4 mb-5">
          <video
            className="rounded-lg"
            src="./images/bm/vid1.mov"
            autoPlay
            loop
          />
          <video
            className="rounded-lg"
            src="./images/bm/vid2.mov"
            autoPlay
            loop
          />
          <video
            className="rounded-lg"
            src="./images/bm/vid3.mov"
            autoPlay
            loop
          />
          <video
            className="rounded-lg"
            src="./images/bm/vid4.mov"
            autoPlay
            loop
          />
        </div>
        <img className="mb-5" src="./images/bm/sponboarding.png"></img>
      </div>
    </Layout>
  );
};
export default homePage;
