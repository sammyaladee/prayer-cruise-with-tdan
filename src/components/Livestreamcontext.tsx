import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { sanityClient } from "../sanity/client";
import { livestreamQuery } from "../sanity/queries";
import type { LivestreamData } from "../pages/livestream/types";

type LivestreamContextType = {
  livestreams: LivestreamData[];
  liveStreams: LivestreamData[];
  pastStreams: LivestreamData[];
  loading: boolean;
  refetch: () => void;
};

const LivestreamContext = createContext<LivestreamContextType | undefined>(undefined);

type LivestreamProviderProps = {
  children: ReactNode;
};

export function LivestreamProvider({ children }: LivestreamProviderProps) {
  const [livestreams, setLivestreams] = useState<LivestreamData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLivestreams = () => {
    setLoading(true);
    sanityClient.fetch(livestreamQuery).then((data) => {
      const streams = Array.isArray(data) ? data : (data ? [data] : []);
      setLivestreams(streams);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching livestreams:", error);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchLivestreams();
  }, []);

  // Separate live and past streams
  const liveStreams = livestreams.filter(stream => stream.isLive);
  const pastStreams = livestreams.filter(stream => !stream.isLive);

  const value = {
    livestreams,
    liveStreams,
    pastStreams,
    loading,
    refetch: fetchLivestreams,
  };

  return (
    <LivestreamContext.Provider value={value}>
      {children}
    </LivestreamContext.Provider>
  );
}

export function useLivestream() {
  const context = useContext(LivestreamContext);
  if (context === undefined) {
    throw new Error("useLivestream must be used within a LivestreamProvider");
  }
  return context;
}