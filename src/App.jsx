import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../assets/pages/Home"
import About from "../assets/pages/About"
import Vans from "../assets/pages/Vans/Vans"
import VanDetail from "../assets/pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "../assets/pages/Host/Dashboard"
import Income from "../assets/pages/Host/Income"
import Reviews from "../assets/pages/Host/Reviews"
import HostLayout from "./components/HostLayOut"

import "../server"
 


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans/" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />


        <Route path="/host" element={<HostLayout />} />
        <Route path="/host" element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
