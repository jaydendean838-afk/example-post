export default function CreatePost() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Post Title</label>
                            <input id="title" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter post title" type="text" name="title" />
                        </div>
                        <div>
                            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">Post Content</label>
                            <textarea id="body" name="body" rows={8} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your post content here..." defaultValue={""} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">Posting as: <span className="font-medium">tom jerry</span>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</button>
                            <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">Create Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}