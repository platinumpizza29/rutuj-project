import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./pages/aboutUs.tsx";
import Gallery from "./pages/gallery.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
