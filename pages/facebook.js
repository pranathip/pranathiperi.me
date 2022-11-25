import React, { Component } from "react";
import Layout from "../components/Layout";

const homePage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="mb-6">
          <h2 className="text-tertiary">description</h2>
          <p className="text-secondary">
            as a software engineering intern at facebook, i worked on the iOS
            team within{" "}
            <a className="highlight" href="https://messengerkids.com/">
              messenger kids
            </a>
            , a instant messaging platform that allows parents/guardians to
            communicate safely and effectively with their children under their
            supervision. during my internship, i completed two projects: a
            post-RTC (real time call) quality survey, and implementing a new
            voice recording feature which includes more interactive graphics and
            voice modulation - both features are currently in production (see
            below) and being used daily by over 1.4 million users.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">tools</h2>
          <p className="text-secondary">
            Objective-C / Swift / GraphQL / UIKit / ComponentKit / Figma
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">timeline</h2>
          <p className="text-secondary">may 2021 - august 2021</p>
        </div>
      </div>
      <div className="w-full drop-shadow-lg">
        <img className="mb-5" src="./images/fb/postrtcsurvey.png"></img>
        <img className="mb-5" src="./images/fb/voicemod.png"></img>
      </div>
    </Layout>
  );
};
export default homePage;
