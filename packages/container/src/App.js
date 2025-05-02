import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </React.Fragment>
        </BrowserRouter>
    )
}