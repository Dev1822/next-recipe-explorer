import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            About Everyday Recipes
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Learn more about our mission and culinary guidelines.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Everyday Recipes is a clean culinary notebook dedicated to timeless kitchen formulas, regional cooking techniques, and reliable weeknight gastronomy.
          </p>
          <p>
            Each entry is tested with accessible ingredients, clear step-by-step instructions, and transparent methodologies to ensure consistent results across all stoves.
          </p>
        </div>
      </main>
    </div>
  );
}
