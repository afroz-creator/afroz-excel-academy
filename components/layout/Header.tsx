import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-green-700">
            Afroz IT Solution
          </h1>
          <p className="text-xs text-gray-500">
            Excel Academy
          </p>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-green-700">Home</a>
          <a href="#" className="hover:text-green-700">Tutorials</a>
          <a href="#" className="hover:text-green-700">Practice</a>
          <a href="#" className="hover:text-green-700">Projects</a>
          <a href="#" className="hover:text-green-700">Downloads</a>
        </nav>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Search size={20} />
        </button>

      </div>
    </header>
  );
}