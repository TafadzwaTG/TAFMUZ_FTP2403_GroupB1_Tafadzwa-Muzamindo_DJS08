import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";
import Vans from "../assets/pages/Vans/Vans";
import VanDetail from "../assets/pages/Vans/VanDetail";

import Dashboard from "../assets/pages/Host/Dashboard";
import Income from "../assets/pages/Host/Income";
import Reviews from "../assets/pages/Host/Reviews";
import HostVans from "../assets/pages/Host/HostVans"
import HostVanInfo from "../assets/pages/Host/HostVanInfo"
import HostVanPhotos from "../assets/pages/Host/HostVanPhotos"
import HostVanPricing from "../assets/pages/Host/HostVanPricing"

import HostVanDetail from "../assets/pages/Host/HostVanDetail"

import Layout from "../src/components/Layout";
import HostLayout from "../src/components/HostLayout";
import "../server";
 


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />


        <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}> 
        <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} /></Route>
      </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
