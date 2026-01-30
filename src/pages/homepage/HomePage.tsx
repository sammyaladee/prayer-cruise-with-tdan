import HeroSection from "./hero/HeroSection";
import LiveStream from "../livestream/LiveStream";
import NewsPage from "../news/NewsPage";
import ContactPage from "../contact/ContactPage";
import { useLivestream } from "../../components/Livestreamcontext";

export default function HomePage() {
  // Get live streams from context - no need to fetch!
  const { liveStreams } = useLivestream();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewsPage />
      <LiveStream streams={liveStreams} />
      <ContactPage />
    </main>
  );
}