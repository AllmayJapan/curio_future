'use client';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">学びを形に、未来へつなぐ</h1>
        <p className="text-lg md:text-2xl mb-8">Curio Futureは、あなたの学びと成果を共有する場を提供します。</p>
        <div className="flex space-x-4">
          <Link href="/portfolio" className="px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition">ポートフォリオを見る</Link>
          <Link href="/blog" className="px-6 py-3 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition">最新記事を読む</Link>
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Page;

