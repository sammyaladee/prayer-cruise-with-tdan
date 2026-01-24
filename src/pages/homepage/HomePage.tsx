import HeroSection from "./hero/HeroSection";
import LivestreamPage from "../livestream/LivestreamPage";
import NewsPage from "../news/NewsPage";
import ContactPage from "../contact/ContactPage";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewsPage />
      <LivestreamPage />
      <ContactPage/>
    </main>
  );
}
