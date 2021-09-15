import React from "react";
import { Route } from "wouter";
import Header from "./components/Header";
import IndexPage from "./pages";
import StoryPage from "./pages/story";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <>
      <Header />

      <Route path="/" component={IndexPage} />
      <Route path="/story" component={StoryPage} />
      <Route path="/contact" component={ContactPage} />
    </>
  );
}
