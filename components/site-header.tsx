'use client'
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/music-sphere.svg" 
              alt="Logo"
              width={24}
              height={24}
              className="h-7 w-7"
            />
            <span className="hidden font-bold sm:inline-block">music sphere</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <button
            className="inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}


export function HeaderMenu() {
  return (
    <header className="w-full border-b  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <nav className="flex justify-center">
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-gray-400">New Music</a></li>
          <li><a href="#" className="hover:text-gray-400">Trending</a></li>
          <li><a href="#" className="hover:text-gray-400">Genres</a></li>
          <li><a href="#" className="hover:text-gray-400">Charts</a></li>
          <li><a href="#" className="hover:text-gray-400">Playlists</a></li>
        </ul>
      </nav>
    </header>
  );
}