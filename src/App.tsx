import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/homepage/HomePage";
import NewsPage from "./pages/news/NewsPage";
import ExhortationPage from "./pages/exhortation/ExhortationPage";
import LivestreamPage from "./pages/livestream/LivestreamPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import PrayerSupportPage from "./pages/prayer-support/PrayerSupportPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/exhortation" element={<ExhortationPage />} />
          <Route path="/livestream" element={<LivestreamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/prayer-support" element={<PrayerSupportPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
