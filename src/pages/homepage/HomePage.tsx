import HeroSection from "./hero/HeroSection";
import LiveStream from "../livestream/LiveStream";
import NewsPage from "../news/NewsPage";
import ContactPage from "../contact/ContactPage";
import { useLivestream } from "../../components/Livestreamcontext";
import SEO from "../../components/SEO";

export default function HomePage() {
  // Get live streams from context - no need to fetch!
  const { liveStreams } = useLivestream();

  return (
    <main className="min-h-screen">
       <SEO
        title="Home"
        description="Raising Intentional Believers through Prayer, Fasting & God's Word. Join Prayer Cruise with TDAN for spiritual growth and community."
        keywords="prayer cruise, TDAN, christian ministry, prayer and fasting, spiritual growth, intentional believers"
        url="https://prayercruisewithtdan.org"
      />
      <HeroSection />
      <NewsPage />
      <LiveStream streams={liveStreams} />
      <ContactPage />
    </main>
  );
}