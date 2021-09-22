import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>Gadzooks!</title>

        <meta property="og:title" content="Gadzooks!" />
        <meta
          property="og:description"
          content="Gadzooks! is revolutionizing this industry with a blend of proprietary solutions and earl grey tea."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gadzooks.me" />
        <meta
          property="og:image"
          content="https://gadzooks.me/img/og/index.png"
        />
        <meta property="og:image:alt" content="Gadzooks!" />
      </Head>

      <Header />

      <div className="h-screen bg-purple-500 flex flex-col items-center justify-center text-white">
        <div className="w-4/5 text-center">
          <h1 className="text-6xl mb-4 font-bold">Page not found.</h1>
          <h2 className="text-2xl">
            Find yourself.{" "}
            <Link href="/contact">
              <a className="underline">Talk with us today.</a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
