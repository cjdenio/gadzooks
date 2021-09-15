import React from "react";
//@ts-ignore
import ReactRotatingText from "react-rotating-text";
import { Link } from "wouter";

export default function IndexPage() {
  return (
    <div>
      <div className="bg-purple-500 flex flex-col justify-center items-center h-screen text-white">
        <div className="w-4/5 text-center">
          <h1 className="text-6xl mb-4 font-bold">
            You need a{" "}
            <ReactRotatingText
              items={[
                "wedding cake",
                "shelf",
                "robot",
                "rare fish",
                "fantastical forest",
                "website",
                "friend",
                "pet",
                "life",
                "pastime",
                "job",
              ]}
            />
            .
          </h1>
          <h2 className="text-3xl">Gadzooks makes it easy as 🥧.</h2>
        </div>
      </div>

      <div className="py-20">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">
            Handling your idea the whole way through.
          </h1>
          <h2 className="mb-10">
            Our expert team members know exactly what they're doing (or so they
            claim).
          </h2>

          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-purple-500 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">
                It all begins with a <em>spark</em>.
              </h2>
              Hey, you gotta start somewhere. Better burn down a well-respected
              forest along the way.
            </div>

            <div className="shadow-md flex-1 bg-purple-500 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">The end is in sight.</h2>
              Is this the light at the end of the tunnel, or is this the light
              of a fast-approaching train? 🤔🚊
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-green-400">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">End-to-end verification.</h1>
          <h2 className="mb-10">
            Robots are dangerous. Your life doesn't have to be.
          </h2>

          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">
                Captchas from start to finish.
              </h2>
              Our internally-developed captcha experience runs an automated
              verification check on <em>every login</em>. Are you a robot? I
              sure hope not.
            </div>

            <div className="shadow-md flex-1 bg-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">
                <span className="font-light">Something for everyone.</span>{" "}
                Robots too.
              </h2>
              Beep boop! Our <b>machine-integration program</b> provides the
              opportunity for robots to enjoy the benefits of our services
              without the hassle of human intervention.
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">
            You deserve best-in-class support.
          </h1>
          <h2 className="mb-10">
            Support over email, SMS, Discord, Twitter DMs, sketchy live chat,
            IRC, and first-class mail (graciously provided by Corgi Logistics).
          </h2>

          <div className="flex gap-3 flex-wrap">
            <div className="shadow-md flex-1 bg-green-400 p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Yes, yes, and yes.</h2>
              No complicated pricing plans, just the very best for you, your
              family, your dog, that rat that's been hiding in your ceiling
              since 2007, your broom, and everyone else.
            </div>

            <div className="shadow-md flex-1 bg-purple-500 text-white p-5 rounded-lg min-w-200">
              <h2 className="text-4xl font-bold mb-3">Better watch out.</h2>
              Santa's on his way in a sleigh, and he understands the impact
              Gadzooks can have on your business or fellowship. Reindeer are
              always optional.
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-purple-500 text-white">
        <div className="w-4/5 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold">Can you hear me now?</h1>
          <h2 className="mb-10">
            Is my mic on? Yes? Good. Try a risk-free trial, no credit card (or
            U-Haul) needed.
          </h2>
          <Link href="/contact">
            <button className="bg-white">Get Started ➡️</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
