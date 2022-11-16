import Header from "./Header";
import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Pranathi Peri</title>
        <link
          href="https://pranathiperi.me/images/icons/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link
          href="https://pranathiperi.me/images/icons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="https://pranathiperi.me/images/icons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="https://pranathiperi.me/images/icons/apple-icon-60x60.png"
          rel="apple-touch-icon"
          sizes="60x60"
        />
        <link
          href="https://pranathiperi.me/images/icons/apple-icon-72x72.png"
          rel="apple-touch-icon"
          sizes="72x72"
        />
        <link
          href="https://pranathiperi.me/images/icons/apple-icon-120x120.png"
          rel="apple-touch-icon"
          sizes="120x120"
        />
      </Head>
      <div className="container mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        <Header />
        {children}
        <div className="flex flex-row justify-between my-8">
          <p>made with ♡ in nyc by pranathi peri</p>
        </div>
      </div>
    </main>
  );
};
export default Layout;
