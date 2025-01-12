'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* ロゴ */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300">Curio Future</Link>
        </div>

        {/* ナビゲーションメニュー */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </nav>

        {/* ハンバーガーメニュー（モバイル用） */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link href="/" className="block hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-gray-300">Blog</Link>
            </li>
            <li>
              <Link href="/portfolio" className="block hover:text-gray-300">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-gray-300">About</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

