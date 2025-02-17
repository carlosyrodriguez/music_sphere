'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const images = [
  "/images/Kendrick-Lamar-GNX.jpg",
  "/images/LadyGaga+BrunoMars-DWS.avif",
  "/images/Billie+Eilish+HMHS.jpg",
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Slideshow */}
      <div className="fixed top-0 left-0 w-full h-[60vh] overflow-hidden">
        {images.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Welcome Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-white drop-shadow-50">
        <h1 className="text-4xl font-bold drop-shadow-md">Welcome to Music Sphere!</h1>
        <p className="mt-4 text-lg drop-shadow-md">Review, Save, & Share your passion for music.</p>
        <Button className="mt-8">Share your Opinion</Button>
      </div>

      {/* Albums */}
      <div className="flex flex-col justify-center h-10">
        <h2 className="text-3xl font-bold">New Albums</h2>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <Card className="bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/images/LadyGaga+BrunoMars-DWS.avif')" }}></Card>
          <Card className="bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/images/Billie+Eilish+HMHS.jpg')" }}></Card>
          <Card>say</Card>
          <Card>now</Card>
        </div>
      </div>
    </div>
  );
}
