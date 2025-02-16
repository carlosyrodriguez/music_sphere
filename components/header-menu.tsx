export function HeaderMenu() {
  return (
    <header className="w-full flex justify-center py-2">
      <nav className="flex justify-center">
        <ul className="flex drop-shadow-md space-x-4 text-md">
          <li><a href="#" className="hover:text-gray-300 border-l border-gray-700 border-opacity-50 pl-3">New Music</a></li>
          <li><a href="#" className="hover:text-gray-300 ">Genres</a></li>
          <li><a href="#" className="hover:text-gray-300 border-r border-gray-700 border-opacity-50 pr-3 ">Playlists</a></li>
        </ul>
      </nav>
    </header>
  );
}