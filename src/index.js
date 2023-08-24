import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/wedding-invitation">
      <Routes>
        <Route exact path="/wedding-invitation"></Route>
        
        <Route path="abc" element={<App ip={"abc"} />} />
        <Route path="abb" element={<App ip={"abb"} />} />
        <Route path="aba" element={<App ip={"aba"} />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
