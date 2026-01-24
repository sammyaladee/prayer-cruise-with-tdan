import { useParams } from "react-router-dom";
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

  useEffect(() => {
    if (!slug) return;
    sanityClient.fetch(singleNewsQuery, { slug }).then(setPost);
  }, [slug]);

  if (!post) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <main className="min-h-screen p-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="rounded-lg mb-6 w-[400px] max-h-[400px] object-cover"
        />
      )}

      <p className="text-lg leading-relaxed">{post.excerpt}</p>
    </main>
  );
}
