export const newsQuery = `*[_type == "newsPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  }
}`;

export const livestreamQuery = `*[_type == "livestream"][0]{
  _id,
  youtubeUrl,
  facebookUrl,
  isLive,
  title,
  scheduledTime
}`;

export const exhortationQuery = `*[_type == "exhortation"] | order(publishedAt desc) {
  _id,
  topic,
  text,
  body,
  publishedAt
}`;
