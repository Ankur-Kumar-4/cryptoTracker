import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
AnalyserNode;
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import CoinPage from "./pages/CoinPage"
import ComparePage from "./pages/ComparePage"
import WatchlistPage from "./pages/WatchlistPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
