'use client'
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeaderMenu } from "@/components/header-menu"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { signIn } from "next-auth/react";


export default function SiteHeader() {

  return (
    <div className="relative top-1 z-50 w-full justify-center border-border/50 bg-gradient-to-b from-background/85 to-transparent py-2">
      <div className="px-3 flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-4 flex-nowrap">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/music-sphere.svg" 
              alt="Logo"
              width={24}
              height={24}
              className="h-9 w-9"
            />
            <span className="font-bold text-2xl whitespace-nowrap drop-shadow-md z-50">Music Sphere</span>
          </Link>
          <div className="hidden md:flex mt-1.5">
          <HeaderMenu />
          </div>
        </div>
        <div className="flex flex-1 items-center w-full justify-end rounded-lg">
        <Search className="h-5 w-5 hover:text-gray-300 mx-1" />
          <Popover className="border-b border-gray-100 border-opacity-50">
            <PopoverTrigger>
              <span className="ml-2 px-4 hover:text-gray-300 border-l border-gray-700 border-opacity-50 pl-2">Account</span>
            </PopoverTrigger>
            <PopoverContent className="mt-6 mx-2 flex flex-col justify-between items-center rounded-2xl bg-background p-6 shadow-xl w-[25vh] h-[9vh]">
               <div className="flex flex-col items-center justify-center">
                <Button onClick={() => signIn("spotify")} className="px-6 py-3 rounded-xl">
                      Sign in with Spotify
                      </Button>
                      </div>
              </PopoverContent>
            </Popover>
          <Link href="/auth/login" passHref>
            <span></span>
          </Link>
        </div>
      </div>
    </div>
  )
}
