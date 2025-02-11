'use client'

import { ChartDropDown } from "@/components/chart-dropdown"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { SkeletonCard } from "@/components/card-skeleton"
import { useState, useEffect } from 'react';

interface Track {
  rank: number;
  name: string;
  image: string;
}

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('/api/spotify/top-tracks');
        const data = await response.json();

        console.log("Fetched Data:", data);  // Log the data to verify the structure

        // Check if the data is in the expected format
        if (data && Array.isArray(data.tracks)) {
          setTracks(data.tracks);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load tracks");
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <h1>Spotify Top 50 Global</h1>

      {error && <p>{error}</p>}

      <ul>
        {tracks.map((track) => (
          <li key={track.rank} className="track">
            <img src={track.image} alt={track.name} width={50} />
            <div>{track.name}</div>
            <div>Rank: {track.rank}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
