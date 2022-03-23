import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";

export default function ServicesPage() {
  return (
    <div>
      <Head>
        <title>What We Do | Gadzooks!</title>

        <meta property="og:title" content="What We Do | Gadzooks!" />
        <meta
          property="og:description"
          content="Gadzooks! is revolutionizing this industry with a blend of proprietary solutions and earl grey tea."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gadzooks.me/services" />
        <meta
          property="og:image"
          content="https://gadzooks.me/img/og/services.png"
        />
        <meta property="og:image:alt" content="What We Do | Gadzooks!" />
      </Head>

      <Header />

      <div className="bg-purple-500 text-center pb-20 pt-36 text-white">
        <div className="w-4/5 text-center mx-auto">
          <h1 className="text-6xl font-bold">What We Do</h1>
        </div>
      </div>

      <div className="py-20">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">
            "Everything, and nothing."
          </h1>
          <h2 className="mb-10">
            Some say you can either do one thing well, or do several things
            badly. We say, <b>why not do both?</b>
          </h2>

          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-purple-500 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Cooking</h2>
              We'll provide your next event with a feast fit for kings.
            </div>

            <div className="shadow-md flex-1 bg-green-400 text-black p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Fencing</h2>
              En garde.
            </div>
          </div>
        </div>

        <div className="w-4/5 max-w-3xl mx-auto my-3">
          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-yellow-600 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Forensics</h2>
              Who did it? The butler? The chef? We take the guesswork out of
              accusation.
            </div>

            <div className="shadow-md flex-1 bg-blue-600 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Exotic fishing</h2>
              Experience the adventure of a lifetime with our guided tours
              through prime fishing grounds.
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-green-400">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">
            Setting the precedent for unprecedented.
          </h1>
          <h2 className="mb-10">It makes perfect sense. Right?</h2>

          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Variety is key.</h2>
              Our mission is to provide the very best selection of services
              around. Auto repair? Dental care? Air fare? We got it.
            </div>

            <div className="shadow-md flex-1 bg-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">
                Sounds cool, doesn't it?
              </h2>
              Honestly, I don't know what to put in this box. -
              <b className="text-purple-500 font-logo">Gadzooks</b> web designer
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-purple-500 text-white">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">Don't be like Bob.</h1>
          <h2 className="mb-10">Contact us today for a free consultation.</h2>
          <Link href="/contact">
            <button className="bg-white">Get Started ➡️</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
