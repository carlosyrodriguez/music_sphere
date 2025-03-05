'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://musicbrainz.org/ws/2/release-group/${id}?fmt=json`);
        const data = await response.json();

        setAlbum({
          title: data.title,
          artist: data["artist-credit"]?.[0]?.name || "Unknown Artist",
          releaseDate: data["first-release-date"],
          imageUrl: `https://coverartarchive.org/release-group/${id}/front`,
        });
      } catch (error) {
        console.error("Error fetching album:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAlbum();
  }, [id]);

  if (loading) return <p>Loading album...</p>;
  if (!album) return <p>Album not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={album.imageUrl} alt={album.title} className="w-full h-auto rounded-lg shadow-lg" />
      <h1 className="text-3xl font-bold mt-4">{album.title}</h1>
      <p className="text-lg text-gray-500">{album.artist}</p>
      <p className="text-md mt-2">Released: {album.releaseDate}</p>
    </div>
  );
}
