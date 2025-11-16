import React, { useState } from "react"

interface PostProps {
    posttitle: string;
    postcontent: string;
    firstname: string;
    postname: string;
    email: string;
    date: string;
}

interface PostCardProps {
    post: PostProps;
    handleClick: () => void;
}

function PostCard({ post, handleClick }: PostCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleClick}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{post.posttitle}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.postcontent}</p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-xs font-bold">{post.firstname}</span>
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm font-medium">{post.postname}</span>
                        <p className="text-gray-500 text-xs">{post.email}</p>
                    </div>

                </div>
                <div className="text-gray-500 text-xs">{post.date}</div>
            </div>
        </div>
    );
}

export default PostCard;