import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function NotFoundView() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 w-full flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
          404
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-500 max-w-md mb-8">
          The recipe, cuisine, or resource you are looking for does not exist or has been moved.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Recipes</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
