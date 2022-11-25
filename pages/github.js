import React, { Component } from "react";
import Layout from "../components/Layout";

const homePage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="mb-6">
          <h2 className="text-tertiary">description</h2>
          <p className="text-secondary">
            in between graduation (december 2021) and moving to nyc, i took on
            the role of product designer at{" "}
            <a className="highlight" href="https://github.com">
              GitHub
            </a>
            . during my 7.5 months at the company, i worked on creating
            visionary designs for the [secret] future of pull requests,
            re-designing{" "}
            <a
              className="highlight"
              href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"
            >
              merge queue
            </a>{" "}
            (a feature that's currently in limited public beta), and
            designing/implementing pricing/membership settings for{" "}
            <a className="highlight" href="https://github.com/features/copilot">
              copilot
            </a>
            .
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">tools</h2>
          <p className="text-secondary">
            Figma / Procreate / React / Next.js / Tailwind
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">timeline</h2>
          <p className="text-secondary">january 2022 - september 2022</p>
        </div>
      </div>
      <div className="w-full drop-shadow-lg">
        <img className="mb-5" src="./images/gh/mergequeue.png"></img>
        <img className="mb-5" src="./images/gh/commenting.png"></img>
      </div>
    </Layout>
  );
};
export default homePage;
