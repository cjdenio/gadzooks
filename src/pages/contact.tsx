import { Formik } from "formik";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Get In Touch | Gadzooks!</title>

        <meta property="og:title" content="Get In Touch | Gadzooks!" />
        <meta
          property="og:description"
          content="Gadzooks! is revolutionizing this industry with a blend of proprietary solutions and earl grey tea."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gadzooks.me/contact" />
        <meta
          property="og:image"
          content="https://gadzooks.me/img/og/contact.png"
        />
        <meta property="og:image:alt" content="Get In Touch | Gadzooks!" />
      </Head>

      <Header />

      <div className="bg-purple-500 text-center pb-20 pt-36 text-white">
        <div className="w-4/5 text-center mx-auto">
          <h1 className="text-6xl font-bold">Get In Touch</h1>
        </div>
      </div>

      <div className="w-4/5 max-w-3xl mx-auto py-20">
        <h1 className="text-6xl font-bold mb-4">Let's talk...</h1>
        <h3 className="mb-10">
          ...about anything, really. Weather is a particularly scintillating
          topic.
        </h3>

        <Formik
          initialValues={{
            email: "",
            name: "",
            message: "",
            interest: "everything",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            await fetch("https://app.99inbound.com/api/e/XvwvhLvk", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            setSubmitting(false);
          }}
        >
          {({
            handleBlur,
            handleChange,
            values,
            isSubmitting,
            handleSubmit,
            submitCount,
          }) => (
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <label className="block mb-5">
                <span>
                  Email <span className="text-red-400">*</span>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="bob@bob.bob"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>

              <label className="block mb-5">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Bob B."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>

              <label className="block mb-5">
                <span>
                  Message <span className="text-red-400">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="I am bob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                ></textarea>
              </label>

              <label className="block mb-5">
                <span>
                  I'm interested in... <span className="text-red-400">*</span>
                </span>
                <select
                  required
                  name="interest"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.interest}
                >
                  <option value="everything">Everything</option>
                  <option value="nothing">Nothing</option>
                  <option value="bob">Bob</option>
                </select>
              </label>

              <button
                type="submit"
                className={`text-white bg-purple-500 border-none font-bold ${
                  !isSubmitting && submitCount > 0 ? "success" : ""
                }`}
                disabled={isSubmitting}
              >
                {!isSubmitting && submitCount > 0 ? "Sent! 🎉" : "Send"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
