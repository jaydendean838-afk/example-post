import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types';
import { useEffect } from 'react';

interface PostProps {
    posttitle: string;
    postcontent: string;
    postname: string;
    firstname: string;
    email: string;
    date: string
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    post: PostProps | null;
}


export default function Modal({ isOpen, onClose, post }: ModalProps) {
    if (!post) return null;
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-500/50"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4">

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 pr-4">{post.posttitle}
                        </h2>
                        <button
                            className="text-gray-500 hover:text-gray-700 text-xl"
                            aria-label="Close modal"
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>
                    <div className="prose prose-lg max-w-none mb-6">
                        <p className="text-gray-700 whitespace-pre-line">{post.postcontent}
                        </p>
                    </div>
                    <div className="border-t pt-4">
                        <h3 className="font-semibold text-gray-800 mb-2">{post.postname}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                    <span className="text-blue-600 text-sm font-bold">{post.firstname}</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">{post.postname}</p>
                                    <p className="text-sm text-gray-600">{post.email}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500" id='date'>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

