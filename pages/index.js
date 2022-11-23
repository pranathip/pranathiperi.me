import React, { Component } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContactInfo from "../components/ContactInfo";
import ProjectSectionParagraph from "../components/ProjectSectionParagraph";

const homePage = () => {
  return (
    <Layout>
      <div className="grid max-w-full auto-rows-auto">
        <div className="mt-8">
          <h2>
            <a href="/about">about</a> •{" "}
            <a href="https://open.spotify.com/user/pperi13?si=6d771ffe169f47ff">
              music i’ve been listening to
            </a>{" "}
            •{" "}
            <a href="https://instagram.com/durgathelabel">
              clothes i’ve been making
            </a>
          </h2>
        </div>
      </div>
      <Section title="projects and gigs" showLastUpdated>
        <ProjectSectionParagraph />
      </Section>
      <Section title="let's chat">
        <ContactInfo />
      </Section>
    </Layout>
  );
};
export default homePage;
