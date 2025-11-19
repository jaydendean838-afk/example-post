import React, { useState } from "react"

interface AuthorProps {
    firstName: string;
    lastName: string;
    username: string;

}

interface PostProps {
    title: string;
    body: string;
    createAt?: string;
    author?: AuthorProps;
}

interface PostCardProps {
    post: PostProps
    handleClick: () => void;
}
function PostCard({ post, handleClick }: PostCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleClick}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{post.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-xs font-bold">P</span>
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm font-medium">{post.author?.firstName} {post.author?.lastName}</span>
                        <p className="text-gray-500 text-xs">{post.author?.username}</p>
                    </div>

                </div>
                <div className="text-gray-500 text-xs">{post.createAt}</div>
            </div>
        </div>
    );
}

export default PostCard;