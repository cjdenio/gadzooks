import React from "react";
import { Link } from "wouter";

export default function ServicesPage() {
  return (
    <div>
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
