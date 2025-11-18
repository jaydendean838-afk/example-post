'use client'

import { useState, useMemo, useEffect } from 'react';
import PostCard from "./postcard";
import { PostList } from "./postlist";
import SearchBar from './searchBar';
import Modal from './modal';
import { Post } from './login/page';

interface ApiData {
  posts: Post[];
}



const POSTS_PER_PAGE = 5;

export default function Home() {
  const [data, setData] = useState<ApiData>({ posts: [] });
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://api-post-feed.onrender.com/api/posts?page=1&limit=10")
      .then(postResponse => postResponse.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error', error);
        setLoading(false);
      });
  }, []);


  if (loading) return <div>Loading....</div>



  const handlepostClick = (post: any) => {
    setIsOpen(true);
    setSelectedPost(post);
  }
  console.log("seleted", selectedPost)

  const handleCloseClick = () => {
    setIsOpen(false);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post Feed Demo</h1>
          <p className="text-gray-600">Welcome back, <span className="font-semibold">tom jerry</span>!</p>
        </div>
        <div className="flex items-center space-x-4">
          <a className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors" href="/myposts">My Posts</a>
          <a className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors" href="/posts">Create Post</a>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">Logout</button>
        </div></div><div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
      <div className="grid gap-6">
        {
          data.posts.length > 0 ? (
            data.posts.map((post: Post) => (
              <PostCard
                key={post.id}
                post={post}
                handleClick={() => handlepostClick(post)}
              />
            ))
          ) : (
            <div className='text-center py-12'>
              <p className="text-gray-500 text-lg">No posts found. Try adjuting your search or filter.</p>
            </div>
          )
        }
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseClick} post={selectedPost} />
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button disabled className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-gray-600">
              Showing {data.posts.length} of {data.posts.length} posts
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4">
          Page {currentPage} of
        </span>

        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
