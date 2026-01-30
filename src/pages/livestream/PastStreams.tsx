import type { LivestreamData } from "./types";
import { getYouTubeEmbedUrl, getFacebookEmbedUrl } from "./utils";

type PastStreamsProps = {
  streams: LivestreamData[];
};

export default function PastStreams({ streams }: PastStreamsProps) {

  if (streams.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Past Streams</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {streams.map((stream) => (
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
  );
}