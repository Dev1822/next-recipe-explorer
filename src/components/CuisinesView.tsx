"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { SUB_REGIONS, RECIPES } from "@/data/recipes";

export default function CuisinesView({
  slug,
}: {
  slug?: string[];
}) {
  const [search, setSearch] = useState("");

  const filteredRegions = SUB_REGIONS.filter(
    (region) =>
      region.name.toLowerCase().includes(search.toLowerCase()) ||
      region.focus.toLowerCase().includes(search.toLowerCase()) ||
      region.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Cuisines
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Browse culinary traditions, regional domains, and flavor profiles.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cuisines and regions"
              className="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {filteredRegions.map((region) => {
            const regionSlug = region.name.toLowerCase().replace(/\s+/g, "-");
            const recipeCount = RECIPES.filter((r) =>
              r.cuisine.toLowerCase().includes(region.name.toLowerCase()) ||
              r.subCuisine?.toLowerCase().includes(region.name.toLowerCase())
            ).length || region.recipesCount;

            return (
              <div
                key={region.name}
                className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                      {region.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                      {recipeCount} recipes
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mt-4">
                    {region.name}
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {region.description}
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded px-2 py-0.5">
                      {region.focusLabel}
                    </span>
                    <span className="text-xs text-slate-500 truncate">
                      {region.focus}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <Link
                    href={`/recipes/${regionSlug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <span>Explore recipes</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div>
            Showing {filteredRegions.length} of {SUB_REGIONS.length} cuisines
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
