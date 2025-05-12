import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import { Home, Work, Contact, Biography, Studio, NotFound } from "./routes";

const Router = () => (
  <BrowserRouter 
  // basename="/Erratica"
  >
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="biography" element={<Biography />} />
        <Route path="studio" element={<Studio />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
