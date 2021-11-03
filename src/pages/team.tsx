import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function TeamPage() {
  return (
    <div>
      <Head>
        <title>Our Team | Gadzooks!</title>

        <meta property="og:title" content="Our Team | Gadzooks!" />
        <meta
          property="og:description"
          content="Gadzooks! is revolutionizing this industry with a blend of proprietary solutions and earl grey tea."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gadzooks.me/team" />
        <meta
          property="og:image"
          content="https://gadzooks.me/img/og/story.png"
        />
        <meta property="og:image:alt" content="Our Team | Gadzooks!" />
      </Head>

      <Header />

      <div className="bg-purple-500 text-center pb-20 pt-36 text-white">
        <div className="w-4/5 text-center mx-auto">
          <h1 className="text-6xl font-bold">Our Team</h1>
        </div>
      </div>

      <div className="w-4/5 max-w-3xl mx-auto py-20">
        <h1 className="text-6xl font-bold mb-10">
          <span className="text-purple-500">Caleb Denio</span> - A man with a
          plan.
        </h1>

        <div className="flex gap-5 flex-wrap-reverse items-center">
          <div className="flex-1 border-purple-500 border-l-4 border-solid pl-4 min-w-200">
            As <b className="text-purple-500">Caleb Denio</b> gazed over the
            South Dakotan plain, he realized this industry was <b>broken</b>.
            Resolving to fix it, he founded{" "}
            <b className="text-purple-500 font-logo">Gadzooks</b>, a new kind of
            company dedicated to restoring a way of life.
          </div>
          <img
            src="/img/caleb.jpg"
            alt="Caleb Denio"
            className="flex-1 w-full rounded-lg shadow-md min-w-200"
          />
        </div>
      </div>

      <div className="w-4/5 max-w-3xl mx-auto py-20 pt-5">
        <h1 className="text-6xl font-bold mb-10">
          <span className="text-purple-500">Deven Jadhav</span> - Going and
          growing.
        </h1>

        <div className="flex gap-5 flex-wrap-reverse items-center">
          <img
            src="/img/deven.jpg"
            alt="Caleb Denio"
            className="flex-1 w-full rounded-lg shadow-md min-w-200"
          />
          <div className="flex-1 border-purple-500 border-r-4 border-solid pr-4 min-w-200">
            <b className="text-purple-500">Deven</b> joined{" "}
            <b className="text-purple-500 font-logo">Gadzooks</b> as a managing
            partner (and general council) in 1988, and has been a crucial part
            of our team ever since.
          </div>
        </div>
      </div>
    </div>
  );
}
