import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/client";
import { livestreamQuery } from "../../sanity/queries";

type LivestreamData = {
  _id: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  isLive: boolean;
  title?: string;
  scheduledTime?: string;
  publishedAt?: string;
};

export default function LivestreamPage() {
  const [livestreams, setLivestreams] = useState<LivestreamData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(livestreamQuery).then((data) => {
      // Ensure data is always an array
      const streams = Array.isArray(data) ? data : (data ? [data] : []);
      setLivestreams(streams);
      setLoading(false);
    });
  }, []);

  const getYouTubeEmbedUrl = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^"&?\/\s]{11})/,
      /(?:youtube\.com\/live\/)([^"&?\/\s]{11})/,
      /(?:youtu\.be\/)([^"&?\/\s]{11})/,
      /(?:youtube\.com\/embed\/)([^"&?\/\s]{11})/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    
    return undefined;
  };

  const getFacebookEmbedUrl = (url: string) => {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&appId`;
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <p className="text-gray-600">Loading livestreams...</p>
      </main>
    );
  }

  // Separate live and past streams
  const liveStreams = livestreams.filter(stream => stream.isLive);
  const pastStreams = livestreams.filter(stream => !stream.isLive);
  const hasAnyStreams = livestreams.length > 0;

  console.log('Live streams:', liveStreams.length);
  console.log('Past streams:', pastStreams.length);
  console.log('Has any streams:', hasAnyStreams);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Watch <span className="text-blue-600">Live</span>
            </h1>
            {liveStreams.length > 0 && (
              <span className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-full text-sm">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                LIVE NOW
              </span>
            )}
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {liveStreams.length > 0
              ? "Join us now for Prayer Cruise live session"
              : "Join us for any of our program or view past programs"
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {!hasAnyStreams ? (
            /* No Streams Available */
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Livestreams Yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                There are currently no livestreams. Join us every Friday at 8:00 PM for Prayer Cruise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://youtube.com/@TDanielOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe on YouTube
                </a>
                <a
                  href="https://facebook.com/tobid3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Live Now Section */}
              {liveStreams.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-gray-900">Live Now</h2>
                    <span className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white font-semibold rounded-full text-xs">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      LIVE
                    </span>
                  </div>
                  
                  {liveStreams.map((stream) => (
                    <div key={stream._id} className="space-y-6">
                      {stream.title && (
                        <h3 className="text-xl font-semibold text-gray-800">{stream.title}</h3>
                      )}
                      
                      <div className="grid gap-6 lg:grid-cols-2">
                        {/* YouTube Live */}
                        {stream.youtubeUrl && getYouTubeEmbedUrl(stream.youtubeUrl) && (
                          <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-4 ring-red-500">
                            <div className="p-4 bg-gradient-to-r from-red-600 to-red-500">
                              <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <h3 className="text-white font-semibold text-lg">YouTube Live</h3>
                              </div>
                            </div>
                            <div className="relative pb-[56.25%] h-0">
                              <iframe
                                src={getYouTubeEmbedUrl(stream.youtubeUrl)}
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}

                        {/* Facebook Live */}
                        {stream.facebookUrl && (
                          <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-4 ring-blue-500">
                            <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500">
                              <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <h3 className="text-white font-semibold text-lg">Facebook Live</h3>
                              </div>
                            </div>
                            <div className="relative pb-[56.25%] h-0">
                              <iframe
                                src={getFacebookEmbedUrl(stream.facebookUrl)}
                                className="absolute top-0 left-0 w-full h-full"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Past Streams Section */}
              {pastStreams.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Past Streams</h2>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pastStreams.map((stream) => (
                      <div key={stream._id} className="space-y-3">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          {/* Show YouTube if available, otherwise Facebook */}
                          {stream.youtubeUrl && getYouTubeEmbedUrl(stream.youtubeUrl) ? (
                            <>
                              <div className="p-2 bg-gradient-to-r from-red-600 to-red-500">
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                  </svg>
                                  <span className="text-white font-medium text-sm">YouTube</span>
                                </div>
                              </div>
                              <div className="relative pb-[56.25%] h-0">
                                <iframe
                                  src={getYouTubeEmbedUrl(stream.youtubeUrl)}
                                  className="absolute top-0 left-0 w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            </>
                          ) : stream.facebookUrl ? (
                            <>
                              <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-500">
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                  </svg>
                                  <span className="text-white font-medium text-sm">Facebook</span>
                                </div>
                              </div>
                              <div className="relative pb-[56.25%] h-0">
                                <iframe
                                  src={getFacebookEmbedUrl(stream.facebookUrl)}
                                  className="absolute top-0 left-0 w-full h-full"
                                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  allowFullScreen
                                />
                              </div>
                            </>
                          ) : null}
                        </div>
                        
                        {/* Title and Date below video */}
                        <div className="px-2">
                          {stream.title && (
                            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{stream.title}</h3>
                          )}
                          {stream.publishedAt && (
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(stream.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Session</h2>
            <p className="text-lg mb-6 text-blue-50">
              Subscribe to our channels and turn on notifications to be alerted when we go live every Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@TDanielOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://facebook.com/tobid3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}