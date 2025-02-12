"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <Button onClick={() => signIn("spotify")} className="px-6 py-3 rounded-xl">
        Sign in with Spotify
      </Button>
    </div>
  );
}
