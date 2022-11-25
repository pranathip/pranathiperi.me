import Header from "./Header";
import React from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Transition
      appear={true}
      show={show}
      as="div"
      enter="transition duration-500 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-500 ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
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
      <div className="container mx-auto mt-16 max-w-container-small md:max-w-container-large">
        <Header />
        {children}
        <div className="flex flex-row justify-between my-8">
          <p>made with ♡ in nyc by pranathi peri</p>
        </div>
      </div>
    </Transition>
  );
};
export default Layout;
