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

  // Function to get preview text (150 characters)
  const getPreview = (text: string) => {
    const maxChars = 150;
    if (text.length <= maxChars) {
      return text;
    }
    return text.slice(0, maxChars).trim() + "...";
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </main>
    );
  }

  if (!news.length) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 text-center">
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Latest <span className="text-blue-600">News</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 space-y-3">
                {post.publishedAt && (
                  <p className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                )}
                <h2 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {getPreview(post.excerpt)}
                </p>
                <a
                  href={`/news/${post.slug.current}`}
                  className="inline-block mt-3 px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}