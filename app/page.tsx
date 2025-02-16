'use client';

export default function Page() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Image Background Container */}
      <div className="fixed top-0 left-0 w-full h-[70vh] overflow-hidden">
        <div className="grid grid-cols-0 w-full h-[70vh]">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/Kendrick-Lamar-GNX.jpg')" }}></div>
        </div>

        {/* Fade Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Content Section (Ensures Text is on Top of Images) */}
      <div className="relative z-10 flex flex-col items-center justify-end h-[45vh] text-white droop-shadow-50">
        <h1 className="text-4xl font-bold drop-shadow-md">Welcome to Music Sphere!</h1>
        <p className="mt-4 text-lg drop-shadow-md">Review, Save, & Share your passion for music.</p>
      </div>
    </div>
  );
}


