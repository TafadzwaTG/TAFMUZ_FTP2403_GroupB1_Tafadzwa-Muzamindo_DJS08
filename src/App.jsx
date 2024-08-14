import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans/Vans"
import VanDetail from "./components/pages/Vans/VanDetail";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Host/Dashboard";
import Income from "./components/pages/Host/Income";
import Reviews from "./components/pages/Host/Reviews";
import HostVans from "./components/pages/Host/HostVans";
import HostVanInfo from "./components/pages/Host/HostVanInfo";
import HostVanPhotos from "./components/pages/Host/HostVanPhotos";
import HostVanPricing from "./components/pages/Host/HostVanPricing";
import NotFound from "./components/pages/NotFound";
import HostVanDetail from "./components/pages/Host/HostVanDetail";
import AuthRequired from "./components/AuthRequired";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
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
        <Route
            path="login"
            element={<Login />}
          />


         <Route element={<AuthRequired />}>
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
      <Route path="*" element={<NotFound />} />
      </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
