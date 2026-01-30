import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { singleNewsQuery } from "../../sanity/queries";

type NewsPost = {
  _id: string;
  title: string;
  excerpt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
};

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    sanityClient
      .fetch<NewsPost | null>(singleNewsQuery, { slug })
      .then((data) => {
        setPost(data);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load news article.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        {error ?? "Article not found."}
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            loading="eager"
            className="w-full h-[400px] object-cover"
          />
        )}

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {post.excerpt}
            </p>
          </div>

          {/* Back to News */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}