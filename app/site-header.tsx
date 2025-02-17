'use client'
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeaderMenu } from "@/components/header-menu"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";

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
        <div className="flex flex-1 items-center w-full justify-end">
          <Search className="h-5 w-5 hover:text-gray-300" />
          <Link href="/auth/login" passHref>
            <span className="ml-2 rounded-xl px-4 hover:text-gray-300">Account</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
