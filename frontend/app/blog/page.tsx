'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

type Blog = {
  id: number;
  title: string;
  content: string;
  timestamp: string;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  // ブログ記事を取得する関数
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/blogs");
      setBlogs(response.data);
    } catch (err) {
      setError("記事を取得できませんでした。");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ブログ記事一覧</h1>
      {error && <p className="text-red-500">{error}</p>}
      {blogs.length === 0 && !error && <p>記事がありません。</p>}
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="border-b border-gray-200 py-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
            <p className="text-sm text-gray-400">投稿日: {new Date(blog.timestamp).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;

