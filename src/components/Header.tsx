import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header text-center bg-white w-4/5 fixed left-0 right-0 mx-auto top-3 py-4 px-20 rounded-full shadow-lg max-w-5xl flex items-center justify-between">
      <Link href="/">
        <a className="button">Home</a>
      </Link>
      <Link href="/services">
        <a className="button">What We Do</a>
      </Link>

      <Link href="/">
        <div className="inline-flex items-center font-logo text-2xl cursor-pointer">
          <img src="/img/logo.svg" alt="Gadzooks logo" className="w-6 mr-3" />
          Gadzooks!
        </div>
      </Link>

      <Link href="/story">
        <a className="button">Our Story</a>
      </Link>
      <Link href="/contact">
        <a className="important button">Get in Touch</a>
      </Link>
    </div>
  );
}
