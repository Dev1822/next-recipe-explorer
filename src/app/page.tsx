"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { RECIPES } from "@/data/recipes";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All cuisines");

  const cuisines = [
    "All cuisines",
    ...Array.from(new Set(RECIPES.map((r) => r.cuisine))),
  ];

  const filtered = RECIPES.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase()) ||
      recipe.id.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine =
      cuisine === "All cuisines" || recipe.cuisine === cuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Recipes</h1>
          <p className="text-slate-500 text-sm mt-1">
            Browse culinary recipes and view their details.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes"
              className="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="cuisine" className="text-sm font-medium text-slate-600 whitespace-nowrap">
              Cuisine:
            </label>
            <select
              id="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {cuisines.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center font-bold text-sm text-slate-700">
                    {recipe.image ? (
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      recipe.cuisine.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                    {recipe.id}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mt-4 line-clamp-1">
                  {recipe.title}
                </h2>

                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {recipe.description}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded px-2 py-0.5">
                    {recipe.cuisine}
                  </span>
                  <span className="text-xs text-slate-500">
                    {recipe.prepTime}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href={`/recipes/${recipe.cuisine.toLowerCase().replace(/\s+/g, "-")}/${recipe.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>View recipe</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div>
            Showing {filtered.length} of {RECIPES.length} recipes
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="border border-slate-200 rounded px-3 py-1.5 text-xs font-medium text-slate-400 bg-white cursor-not-allowed"
            >
              Previous
            </button>
            <button
              disabled
              className="border border-slate-200 rounded px-3 py-1.5 text-xs font-medium text-slate-400 bg-white cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
