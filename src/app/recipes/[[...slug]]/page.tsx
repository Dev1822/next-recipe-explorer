import Link from "next/link";
import { ArrowLeft, Check, Clock, Users, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import NotFoundView from "@/components/NotFoundView";
import { RECIPES } from "@/data/recipes";

export function generateStaticParams() {
  const categories = [
    { slug: [] },
    { slug: ["quick-meals"] },
    { slug: ["plant-based"] },
    { slug: ["baking-grains"] },
    { slug: ["soups-stews"] },
    { slug: ["asian"] },
    { slug: ["mediterranean"] },
    { slug: ["european"] },
    { slug: ["japanese"] },
    { slug: ["indian"] },
    { slug: ["italian"] },
    { slug: ["latin-american"] },
    { slug: ["middle-eastern"] },
  ];
  const recipeParams = RECIPES.map((r) => ({
    slug: [r.cuisine.toLowerCase().replace(/\s+/g, "-"), r.slug],
  }));
  return [...categories, ...recipeParams];
}

export default async function RecipesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (slug && slug.length >= 1) {
    const lastSlug = slug[slug.length - 1];
    const recipe = RECIPES.find(
      (r) =>
        r.slug === lastSlug ||
        r.id.toLowerCase() === lastSlug.toLowerCase() ||
        r.slug === slug[0]
    );

    if (recipe) {
      return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
          <Navbar />

          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
            <div className="mb-6">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all recipes</span>
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 mb-6">
              <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                      {recipe.id}
                    </span>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded px-2 py-0.5">
                      {recipe.cuisine}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                    {recipe.title}
                  </h1>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {recipe.longDescription || recipe.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4 text-slate-400" />
                      <span>{recipe.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{recipe.servings || "2 portions"}</span>
                    </div>
                  </div>
                </div>

                {recipe.image && (
                  <div className="w-full md:w-64 h-48 md:h-44 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h2 className="text-base font-bold text-slate-900 mb-4">
                  Ingredients ({recipe.ingredients.length})
                </h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {recipe.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-base font-bold text-slate-900 mb-4">
                  Instructions ({recipe.steps.length} steps)
                </h2>
                <div className="space-y-4">
                  {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.instruction}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }

    const firstSegment = slug[0].toLowerCase();
    const isCategoryOrCuisine =
      ["quick-meals", "plant-based", "baking-grains", "soups-stews"].includes(firstSegment) ||
      RECIPES.some(
        (r) => r.cuisine.toLowerCase().replace(/\s+/g, "-") === firstSegment
      );

    if (!isCategoryOrCuisine) {
      return <NotFoundView />;
    }
  }

  const activeCategory = slug?.[0]?.toLowerCase();
  const filtered = activeCategory
    ? RECIPES.filter(
        (r) =>
          r.category === activeCategory ||
          r.cuisine.toLowerCase().replace(/\s+/g, "-") === activeCategory
      )
    : RECIPES;

  const categories = [
    { label: "All", slug: "" },
    { label: "Quick Meals", slug: "quick-meals" },
    { label: "Plant-Based", slug: "plant-based" },
    { label: "Baking & Grains", slug: "baking-grains" },
    { label: "Soups & Stews", slug: "soups-stews" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Recipes
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore our curated culinary formulas and techniques.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => {
            const isActive =
              (!activeCategory && cat.slug === "") ||
              activeCategory === cat.slug;
            return (
              <Link
                key={cat.label}
                href={cat.slug ? `/recipes/${cat.slug}` : "/recipes"}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
