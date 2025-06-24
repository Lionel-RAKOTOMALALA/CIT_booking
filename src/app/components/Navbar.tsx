'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleAuthClick = () => {
    router.push('/sign-in');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">TravelBook</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/discover"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Découvrir
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Collections
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Expériences
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={handleAuthClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <User className="h-5 w-5 mr-2" />
              Connexion
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/discover"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Découvrir
            </Link>
            <Link
              href="/collections"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Collections
            </Link>
            <Link
              href="/experiences"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Expériences
            </Link>
            <button
              onClick={handleAuthClick}
              className="w-full text-left block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 