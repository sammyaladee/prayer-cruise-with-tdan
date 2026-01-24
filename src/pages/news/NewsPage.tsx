import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { newsQuery } from "../../sanity/queries";

type NewsPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(newsQuery).then((data) => {
      setNews(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading news...</p>
      </main>
    );
  }

  if (!news.length) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No News Yet
        </h2>
        <p className="text-gray-600 max-w-md">
          There are currently no news updates. Please check back soon for
          announcements and updates from Prayer Cruise.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings, announcements, and events
          from Prayer Cruise.
        </p>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {post.excerpt}
              </p>
              <a
                href={`/news/${post.slug.current}`}
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}