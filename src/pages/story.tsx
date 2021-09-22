import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function StoryPage() {
  return (
    <div>
      <Head>
        <title>Our Story | Gadzooks!</title>

        <meta property="og:title" content="Our Story | Gadzooks!" />
        <meta
          property="og:description"
          content="Gadzooks! is revolutionizing this industry with a blend of proprietary solutions and earl grey tea."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gadzooks.me/story" />
        <meta
          property="og:image"
          content="https://gadzooks.me/img/og/story.png"
        />
        <meta property="og:image:alt" content="Our Story | Gadzooks!" />
      </Head>

      <Header />

      <div className="bg-purple-500 text-center pb-20 pt-36 text-white">
        <div className="w-4/5 text-center mx-auto">
          <h1 className="text-6xl font-bold">Our Story</h1>
        </div>
      </div>

      <div className="w-4/5 max-w-3xl mx-auto py-20">
        <h1 className="text-6xl font-bold mb-10">A man with a plan.</h1>

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
    </div>
  );
}
