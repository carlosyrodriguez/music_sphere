'use client'
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeaderMenu } from "@/components/header-menu"
import { MobileHeaderMenu } from "@/components/mobile-header-menu"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function SiteHeader() {

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-0.5">
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
            <span className="font-bold text-2xl whitespace-nowrap ">music sphere</span>
          </Link>
          <div className="hidden md:flex mt-1.5">
          <HeaderMenu />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <button
            className="inline-flex items-center justify-center rounded-full p-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button href="/auth/login" className="ml-2 rounded-xl px-4 ">Sign In</Button>
        </div>
      </div>
    </div>
  )
}
