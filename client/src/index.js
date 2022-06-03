import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Navigation, Footer, Home, About, Contact } from "./components";
import { default as Navigation } from "./components/Navigation";
import { default as Footer } from "./components/Footer";
import { default as Home } from "./components/Home";
import { default as About } from "./components/About";
import { default as Contact } from "./components/Contact";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
