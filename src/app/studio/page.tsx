"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

interface IngredientRow {
  id: string;
  amount: string;
  name: string;
}

export default function StudioPage() {
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("Asian");
  const [prepTime, setPrepTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);

  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { id: "1", amount: "200g", name: "Wheat noodles" },
    { id: "2", amount: "2 tbsp", name: "Soy sauce" },
    { id: "3", amount: "1 clove", name: "Garlic, minced" },
  ]);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now().toString(), amount: "", name: "" },
    ]);
  };

  const removeIngredient = (id: string) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
  };

  const updateIngredient = (
    id: string,
    field: "amount" | "name",
    value: string
  ) => {
    setIngredients(
      ingredients.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Recipe Studio
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Draft and formulate new recipes.
            </p>
          </div>
          <Link
            href="/recipes"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Cancel</span>
          </Link>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900">Recipe Details</h2>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Garlic Butter Noodles"
                className="w-full text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Cuisine
                </label>
                <select
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="Asian">Asian</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="European">European</option>
                  <option value="Latin American">Latin American</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Prep Time
                </label>
                <input
                  type="text"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  placeholder="e.g. 25 mins"
                  className="w-full text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief summary of the recipe..."
                className="w-full text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Ingredients</h2>
              <button
                type="button"
                onClick={addIngredient}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Ingredient</span>
              </button>
            </div>

            <div className="space-y-3">
              {ingredients.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) => updateIngredient(item.id, "amount", e.target.value)}
                    placeholder="Qty (e.g. 2 tbsp)"
                    className="w-32 text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateIngredient(item.id, "name", e.target.value)}
                    placeholder="Ingredient item"
                    className="flex-1 text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeIngredient(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div>
              {saved && (
                <span className="text-xs font-medium text-emerald-600">
                  Recipe saved successfully!
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
