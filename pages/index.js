import React, { Component } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContactInfo from "../components/ContactInfo";
//import PillButton from "../components/PillButton";
import styled from "styled-components";

const PillButton = styled.button`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const homePage = () => {
  return (
    <Layout>
      <div className="grid max-w-full auto-rows-auto">
        <div className="mt-12 md:mt-8">
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
      <Section title="let's chat">
        <ContactInfo />
      </Section>
    </Layout>
  );
};
export default homePage;
