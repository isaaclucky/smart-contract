import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from 'react'
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path= "/*" element={<NotFound/>}/>


        </Routes>
    </BrowserRouter>
  )
}

export default Router
