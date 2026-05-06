import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-300">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
