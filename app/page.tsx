'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
const images = [
  "/images/Kendrick-Lamar-GNX.jpg",
  "/images/LadyGaga+BrunoMars-DWS.avif",
  "/images/Billie+Eilish+HMHS.jpg",
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

    // Fetch albums from MusicBrainz API
    useEffect(() => {
      const fetchTopAlbums = async () => {
        try {
          const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=geo.gettopalbums&country=United%20States&api_key=b9f3e1110e8aed797e25c70eb330ff6e&format=json`
          );
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log("API Response:", data);
    
          if (!data.topalbums || !data.topalbums.album) {
            throw new Error("Unexpected API response structure");
          }
    
          const albumData = data.topalbums.album.map((album) => ({
            id: album.mbid || album.name.replace(/\s+/g, '-').toLowerCase(),
            title: album.name,
            artist: album.artist.name,
            imageUrl: album.image?.[3]?.["#text"] || "/placeholder.jpg",
          }));
    
          setAlbums(albumData);
        } catch (error) {
          console.error("Error fetching top albums:", error);
        }
      };
    
      fetchTopAlbums();
    }, []);    

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Slideshow */}
      <div className="relative top-0 left-0 w-full z-10 h-[60vh] overflow-hidden">
        {images.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-[45vh] bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Welcome Section */}
      <div className=" absolute top-[35vh] z-10 flex flex-col items-center justify-center text-center text-white drop-shadow-50 w-full">
        <p className="text-4xl font-bold drop-shadow-md">Welcome to Music Sphere!</p>
        <p className="mt-4 text-lg drop-shadow-md">Review, Save, & Share your passion for music.</p>
         {/* Button to Show Card */}
         <Button className="mt-8" onClick={() => setIsOpen(true)}>Share your Opinion</Button>
         <p className="mt-4 text-sm drop-shadow-md text-gray-400"> Explore </p>
      </div>

      {/* Pop-up Card */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <Card className="relative w-[400px] bg-gray-900 p-6 shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle>Email</CardTitle>
              <CardDescription>
              <input type="email" className="w-full p-2 mt-2 border border-gray-800 rounded-lg" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Password</p>
              <input type="password" className="w-full p-2 mt-2 border border-gray-800 rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
            </CardFooter>
          </Card>
        </div>
      )}
        <h2 className="text-3xl font-bold mt-20 my-4 mx-2">Explore Music</h2>
        <div className="relative w-full overflow-x-auto">
          <div className="flex space-x-4 p-2">
          {albums.length > 0 ? (
            albums.map((album) => (
              <Link key={album.id} href={`/albums/${album.id}`} passHref>
                <Card className="relative bg-cover bg-center h-[140px] w-[140px] sm:h-[130px] sm:w-[130px] md:h-[170px] md:w-[170px] flex-shrink-0 cursor-pointer" style={{ backgroundImage: `url(${album.imageUrl})` }}>
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                    <p className="text-sm">{album.title}</p>
                    <p className="text-xs">{album.artist}</p>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            // Placeholder Cards
            Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="bg-gray-200 h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[170px] md:w-[170px] animate-pulse flex items-center justify-center flex-shrink-0">
                <p>Loading...</p>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
