import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { exhortationQuery } from "../../sanity/queries";

type Exhortation = {
  _id: string;
  topic: string;
  text: string;
  body: string;
  publishedAt: string;
};

export default function ExhortationPage() {
  const [exhortation, setExhortation] = useState<Exhortation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(exhortationQuery).then((data) => {
      // Get only the most recent exhortation
      const latestExhortation = data && data.length > 0 ? data[0] : null;
      setExhortation(latestExhortation);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <p className="text-gray-600">Loading exhortation...</p>
      </main>
    );
  }

  if (!exhortation) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No Exhortation Yet
        </h2>
        <p className="text-gray-600 max-w-md">
          There is currently no weekly exhortation. Please check back soon for words of encouragement.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Weekly <span className="text-blue-600">Exhortation</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Words of encouragement and spiritual guidance to strengthen your faith journey.
          </p>
        </div>
      </section>

      {/* Exhortation Display */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            {/* Topic */}
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {exhortation.topic}
              </h2>
              {exhortation.publishedAt && (
                <p className="text-sm text-gray-500">
                  {new Date(exhortation.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              )}
            </div>

            {/* Text (Scripture/Key Verse) */}
            {exhortation.text && (
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="text-lg italic text-gray-700">
                  "{exhortation.text}"
                </p>
              </div>
            )}

            {/* Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {exhortation.body}
              </p>
            </div>

            {/* Divider for visual separation */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Prayer Cruise with TDAN</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}