import React from "react";
import { Link } from "wouter";
import logo from "../img/logo.svg";

export default function Header() {
  return (
    <div className="header text-center bg-white w-4/5 fixed left-0 right-0 mx-auto top-3 py-4 px-20 rounded-full shadow-lg max-w-5xl flex items-center justify-between">
      <Link href="/" className="button">
        Home
      </Link>
      <Link href="/services" className="button">
        What We Do
      </Link>

      <Link href="/">
        <div className="inline-flex items-center font-logo text-2xl cursor-pointer">
          <img src={logo} alt="Gadzooks logo" className="w-6 mr-3" />
          Gadzooks!
        </div>
      </Link>

      <Link href="/story" className="button">
        Our Story
      </Link>
      <Link href="/contact" className="important button">
        Get in Touch
      </Link>
    </div>
  );
}
