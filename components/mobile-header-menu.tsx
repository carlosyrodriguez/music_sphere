export function MobileHeaderMenu() {
  return (
    <header className="block md:hidden w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center py-2">
      <nav className="flex justify-center">
        <ul className="flex space-x-6 text-md">
          <li><a href="#" className="hover:text-gray-400 pr-4 border-r">New Music</a></li>
          <li><a href="#" className="hover:text-gray-400 pr-4 border-r">Genres</a></li>
          <li><a href="#" className="hover:text-gray-400 pr-4 border-r">Charts</a></li>
          <li><a href="#" className="hover:text-gray-400">Playlists</a></li>
        </ul>
      </nav>
    </header>
  );
}
  