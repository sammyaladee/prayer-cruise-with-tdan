import type { LivestreamData } from "./types";
import { getYouTubeEmbedUrl, getFacebookEmbedUrl } from "./utils";

type LiveStreamProps = {
  streams: LivestreamData[];
};

export default function LiveStream({ streams }: LiveStreamProps) {

  if (streams.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6 p-10">
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
      
      {streams.map((stream) => (
        <div key={stream._id} className="space-y-6">
          {stream.title && (
            <h3 className="text-xl font-semibold text-gray-800">{stream.title}</h3>
          )}
          
          <div className="grid gap-10 lg:grid-cols-2">
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
  );
}