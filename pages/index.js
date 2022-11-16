import React, { Component } from "react";
import Layout from "/components/layout";
const homePage = () => {
  return (
    <Layout>
      <div className="grid max-w-full gap-16 auto-rows-auto">
        <div className="mt-12 md:mt-8">
          <h2>
            about • music i’ve been listening to • clothes i’ve been making
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default homePage;
