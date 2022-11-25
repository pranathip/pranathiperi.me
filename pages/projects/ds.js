import React, { Component } from "react";
import Layout from "../../components/Layout";

const homePage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="mb-6">
          <h2 className="text-tertiary">description</h2>
          <p className="text-secondary">
            as a facebook university engineering intern, i was tasked with
            designing and developing an iOS application from the ground up.
            deadstock is an app that allows users to monitor the prices of
            highly sought after sneakers, similar to the way in which users
            monitor stock prices on an investing application. the app has three
            main parts: price monitoring, sneaker news, and user authentication.{" "}
            <br />
            <br />
            in order to get live data for the price monitoring aspect of the
            app, i created a scraper using python, BeautifulSoup, and selenium
            which paginates through the{" "}
            <a className="highlight" href="https://stockx.com">
              stockx website
            </a>{" "}
            year-by-year to get information about each sneaker including
            volatility, 52-week high, colorway, last selling price, and more.{" "}
            <br />
            <br />
            the sneaker news feature of the app pulls data from a{" "}
            <a className="highlight" href="https://newsapi.org/">
              news api
            </a>
            , using the nations most popular lifestyle/sneaker news outlets as
            endpoints. <br />
            <br />
            finally, the user authentication portion of the app allows a user to
            create an account, change their profile picture, password, and
            username. additionally, using firebase, each user's data (including
            the sneakers they've selected to monitor) persists across a user's
            session. <br />
            <br />
            the source code for this project can be found{" "}
            <a
              className="highlight"
              href="https://github.com/pranathip/DeadStock"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">tools</h2>
          <p className="text-secondary">
            Objective-C / Swift / UIKit / Firebase / Python / Selenium /
            BeautifulSoup / Figma / Procreate
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-tertiary">timeline</h2>
          <p className="text-secondary">august 2020</p>
        </div>
      </div>
      <div className="w-full drop-shadow-lg">
        <img
          className="mb-5"
          src="https://pranathiperi.me/images/ds/ds.png"
        ></img>
        <img
          className="mb-5"
          src="https://pranathiperi.me/images/ds/wireframes.png"
        ></img>
        <img
          className="mb-5"
          src="https://pranathiperi.me/images/ds/hifid.png"
        ></img>
      </div>
    </Layout>
  );
};
export default homePage;
