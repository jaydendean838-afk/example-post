'use client';

import { useState, useEffect } from "react";
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ApiData {
    posts: Post[];
}


export default function MyPosts() {

    const [data, setData] = useState<ApiData>({ posts: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-post-feed.onrender.com/api/posts?page=1&limit=10&userid=691a2ae7c0a68ee6b332e69f')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("error", error);
                setLoading(false);
            });
    }, []);
    if (loading) return <div>Loading....</div>

    return <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">My Posts</h1>
                <p className="text-gray-600">Manage and view your published posts</p>
            </div>
            <div className="flex items-center space-x-4">
                <a
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                    href="/"
                >
                    All Posts
                </a>
                <a
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    href="/post"
                >
                    Create Post
                </a>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Logout
                </button>
            </div>
        </div>
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search your posts..."
                type="text"
                defaultValue=""
            />
        </div>
        <div className="grid gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                    qwerq
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">qwerqwer</p>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <span className="text-blue-600 text-xs font-bold">j</span>
                        </div>
                        <div>
                            <span className="text-gray-600 text-sm font-medium">
                                jayden dean
                            </span>
                            <p className="text-gray-500 text-xs">@jayden</p>
                        </div>
                    </div>
                    <div className="text-gray-500 text-xs">11/17/2025</div>
                </div>
            </div>
        </div>
    </div>
}



