import React from "react";
import { Route } from "wouter";
import Header from "./components/Header";
import IndexPage from "./pages";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <>
      <Route path="/" component={IndexPage} />
      <Route path="/about" component={AboutPage} />
    </>
  );
}
