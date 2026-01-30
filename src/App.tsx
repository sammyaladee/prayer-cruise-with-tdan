import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/homepage/HomePage";
import NewsPage from "./pages/news/NewsPage";
import ExhortationPage from "./pages/exhortation/ExhortationPage";
import LivestreamPage from "./pages/livestream/LivestreamPage";
import { LivestreamProvider } from "./components/Livestreamcontext";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import PrayerSupportPage from "./pages/prayer-support/PrayerSupportPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";
import TestimoniesPage from "./pages/testimonies/TestimoniesPage";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <HelmetProvider>
      {!isLoaded && <LoadingScreen />}

      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <LivestreamProvider>
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
                <Route path="/testimonies" element={<TestimoniesPage />} />
                <Route path="/news/:slug" element={<NewsDetailPage />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </LivestreamProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;