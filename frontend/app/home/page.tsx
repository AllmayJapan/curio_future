'use client';
import Link from 'next/link';
import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaLaravel, FaNginx, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMysql, SiTailwindcss } from 'react-icons/si';
import { TiSpanner } from "react-icons/ti";
import { HiCommandLine } from "react-icons/hi2";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white">
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

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="flex justify-center text-3xl md:text-4xl font-bold mb-6">自己紹介 <HiCommandLine /></h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          私は「学び」と「共有」を大切にしています。仕事に対する思いとしては、
          クライアントの想いを形にし、ユーザーにとって価値のある体験を提供することに注力しています。
          そのために日々新しい技術を学び、それをアウトプットし続けることを心がけています。
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          また、チームでの協力を重視し、コミュニケーションを大切にしています。
          クライアントやユーザーとの信頼関係を築きながら、一歩ずつ着実に成果を積み上げていきたいと考えています。
        </p>
      </div>
    </section>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="flex justify-center text-3xl md:text-4xl font-bold mb-6">技術スタック<TiSpanner /></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">フロントエンド</h3>
            <ul className="grid grid-cols-2 gap-4 justify-between">
              <li className="flex text-xl items-center space-x-2 justify-center"><FaReact className="text-blue-500" size={24} /><span>React</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><SiNextdotjs className="text-black" size={24} /><span>Next.js</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><SiTypescript className="text-blue-400" size={24} /><span>TypeScript</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><SiTailwindcss className="text-teal-500" size={24} /><span>TailwindCSS</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">バックエンド</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex text-xl items-center space-x-2 justify-center"><FaNodeJs className="text-green-500" size={24} /><span>Node.js</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><FaLaravel className="text-red-500" size={24} /><span>Laravel</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><SiMysql className="text-orange-500" size={24} /><span>MySQL</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">インフラ</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex text-xl items-center space-x-2 justify-center"><FaDocker className="text-blue-500" size={24} /><span>Docker</span></li>
              <li className="flex text-xl items-center space-x-2 justify-center"><FaGitAlt className="text-orange-600" size={24} /><span>Git</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
    </main>
  );
};

export default Page;

