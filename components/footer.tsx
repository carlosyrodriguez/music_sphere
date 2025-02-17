"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-background  py-3">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-3 text-sm text-foreground">
          <span className="whitespace-nowrap text-xs text-muted-foreground">
            Music Sphere {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}