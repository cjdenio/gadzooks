import React, { useEffect } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import Header from "./components/Header";
import IndexPage from "./pages";
import StoryPage from "./pages/story";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";

export default function App() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={IndexPage} />
        <Route path="/story" component={StoryPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ServicesPage} />
        <Route>
          <div className="h-screen bg-purple-500 flex flex-col items-center justify-center text-white">
            <div className="w-4/5 text-center">
              <h1 className="text-6xl mb-4 font-bold">Page not found.</h1>
              <h2 className="text-2xl">
                Find yourself.{" "}
                <Link href="/contact" className="underline">
                  Talk with us today.
                </Link>
              </h2>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}
