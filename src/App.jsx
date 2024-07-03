import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from "./components/common/Navbar";
import BackToTopBtn from "./components/common/BackToTopBtn";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CoinPage = React.lazy(() => import("./pages/CoinPage"));
const ComparePage = React.lazy(() => import("./pages/ComparePage"));
const WatchlistPage = React.lazy(() => import("./pages/WatchlistPage"));

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} />
        <BackToTopBtn />
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
