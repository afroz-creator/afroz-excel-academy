"use client";

import { useState } from "react";
import Link from "next/link";

import SearchBar from "@/components/tutorials/SearchBar";
import CategoryFilter from "@/components/tutorials/CategoryFilter";
import { tutorials } from "@/data/tutorials";

export default function TutorialsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch = tutorial.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tutorial.level === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Afroz IT Solution
          </span>

          <h1 className="text-5xl font-bold mt-4 text-gray-900">
            Microsoft Excel Tutorials
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Learn Microsoft Excel from Basic to Advanced with practical examples.
          </p>

        </div>

        {/* Search */}

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* Category Filter */}

        <CategoryFilter
          value={category}
          onChange={setCategory}
        />

        {/* Lesson Count */}

        <p className="text-gray-600 mb-8">
          {filteredTutorials.length} Lesson(s) Found
        </p>

        {/* Cards */}

        {filteredTutorials.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-16 text-center">

            <div className="text-6xl mb-6">📚</div>

            <h2 className="text-3xl font-bold text-gray-800">
              No Tutorials Found
            </h2>

            <p className="mt-4 text-gray-600">
              Try another keyword or select a different category.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredTutorials.map((tutorial) => (

              <div
                key={tutorial.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
              >

                <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  {tutorial.level}
                </span>

                <h2 className="text-2xl font-bold mt-5">
                  {tutorial.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  Duration: {tutorial.duration}
                </p>

                <Link
                  href={`/tutorials/${tutorial.slug}`}
                  className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition"
                >
                  Start Learning →
                </Link>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
  );
}