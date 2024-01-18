import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import MyNav from "./Components/MyNav";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyNav></MyNav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details/:articleId" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
