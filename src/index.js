import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { default as Header } from "./components/Header";
import { default as Footer } from "./components/Footer";
import { default as Home } from "./components/Home";
import { default as About } from "./components/About";
import { default as Project } from "./components/Project";
import { default as Contact } from "./components/Contact";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
