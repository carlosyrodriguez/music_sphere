export function MobileHeaderMenu() {
  return (
    <header className="relative top-0 md:hidden w-full flex justify-center py-4  bg-background/30 blur-gradient z-50">
      <nav className="flex justify-center">
        <ul className="flex space-x-6 text-md drop-shadow-50">
          <li><a href="#" className="hover:text-gray-400 pr-4 border-r">New Music</a></li>
          <li><a href="#" className="hover:text-gray-400 pr-4 border-r ">Genres</a></li>
          <li><a href="#" className="hover:text-gray-400 ">Playlists</a></li>
        </ul>
      </nav>
    </header>
  );
}
  