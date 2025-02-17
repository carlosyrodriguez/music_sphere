'use client';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="relative w-full min-h-screen">
      {/* bg */}
      <div className="fixed top-0 left-0 w-full h-[60vh] overflow-hidden">
        <div className="grid grid-cols-0 w-full h-[60vh]">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/Kendrick-Lamar-GNX.jpg')" }}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-background"></div>
      </div>
      {/* welcome section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-white droop-shadow-50">
        <h1 className="text-4xl font-bold drop-shadow-md">Welcome to Music Sphere!</h1>
        <p className="mt-4 text-lg drop-shadow-md">Review, Save, & Share your passion for music.</p>
        <Button className="mt-8">Share your Opinion
          <Card></Card>
        </Button>
      </div>
      {/* albums */}
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


