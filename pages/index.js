import React, { Component } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const homePage = () => {
  return (
    <Layout>
      <div className="grid max-w-full auto-rows-auto">
        <div className="mt-12 md:mt-8">
          <h2>
            <a href="/about">about</a> •{" "}
            <a href="/">music i’ve been listening to</a> •{" "}
            <a href="/">clothes i’ve been making</a>
          </h2>
        </div>
      </div>
      <Section title="projects and gigs"></Section>
      <Section title="let's chat"></Section>
    </Layout>
  );
};
export default homePage;
