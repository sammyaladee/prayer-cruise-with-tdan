export const getYouTubeEmbedUrl = (url: string): string | undefined => {
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

export const getFacebookEmbedUrl = (url: string): string => {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&appId`;
};