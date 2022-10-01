import { BrowserRouter,Switch, Route } from "react-router-dom";
import React from 'react'
import LandingPage from "./pages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage}
            />
        </Switch>
    </BrowserRouter>
  )
}

export default Router
