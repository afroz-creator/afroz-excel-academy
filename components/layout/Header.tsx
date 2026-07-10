import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Afroz Excel Academy"
            width={70}
            height={70}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Afroz Excel Academy
            </h1>

            <p className="text-xs text-gray-500">
              Powered by Afroz IT Solution
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">

          <Link href="/" className="hover:text-green-700">
            Home
          </Link>

          <Link href="/tutorials/excel-basics" className="hover:text-green-700">
            Tutorials
          </Link>

          <Link href="/dashboard" className="hover:text-green-700">
            Dashboard
          </Link>

          <Link href="/practice" className="hover:text-green-700">
            Practice
          </Link>

          <Link href="/projects" className="hover:text-green-700">
            Projects
          </Link>

          <Link href="/downloads" className="hover:text-green-700">
            Downloads
          </Link>

        </nav>

        {/* Search Button */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Search size={20} />
        </button>

      </div>
    </header>
  );
}