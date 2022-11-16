import React, { Component } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContactInfo from "../components/ContactInfo";
import ProjectSection from "../components/ProjectSection";

const homePage = () => {
  return (
    <Layout>
      <div className="grid max-w-full auto-rows-auto">
        <div className="mt-8">
          <h2>
            <a href="/about">about</a> •{" "}
            <a href="/">music i’ve been listening to</a> •{" "}
            <a href="https://instagram.com/durgathelabel">
              clothes i’ve been making
            </a>
          </h2>
        </div>
      </div>
      <Section title="projects and gigs" showLastUpdated></Section>
        <ProjectSection
          subject="product designer"
          project="github"
          date="mar 2022 - sep 2022"
          subtitle="made pull requests even better. designed flows for merge queue, threaded comments on PRs, and some other [secret stuff].  "
        ></ProjectSection>
        <ProjectSection
          subject="software engineering intern"
          project="facebook"
          date="may 2020 - aug 2020"
          subtitle="designed and developed features for messenger kids on iOS"
        ></ProjectSection>
        <ProjectSection
          subject="product design lead"
          project="berkeley mobile"
          date="aug 2020 - dec 2021"
          subtitle="led the design and feature development for uc berkeley's flagship mobile application, available on the app store and used daily by thousands of students."
        ></ProjectSection>
        <ProjectSection
          subject="deadstock"
          project="personal project (iOS application)"
          date="aug 2020"
          subtitle="deadstock is an app that allows users to monitor volatile prices of highly sought after sneakers. design and developed from the ground up"
        ></ProjectSection>
        <ProjectSection
          subject="founder and designer"
          project="durga the label"
          date="jan 2022 - present"
          subtitle="hand making modern clothing pieces out of sustainably sourced indian textiles and fabrics."
        ></ProjectSection>
      </Section>
      <Section title="let's chat">
        <ContactInfo />
      </Section>
    </Layout>
  );
};
export default homePage;
