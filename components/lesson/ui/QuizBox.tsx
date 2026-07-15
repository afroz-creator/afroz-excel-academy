"use client";

import { useState } from "react";

interface QuizBoxProps {
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function QuizBox({
  question,
  options,
  correctAnswer,
}: QuizBoxProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">

      <div className="mb-5 flex items-center gap-2">
        <span className="text-2xl">❓</span>

        <h3 className="text-2xl font-bold text-yellow-700">
          Quick Quiz
        </h3>
      </div>

      <p className="mb-6 text-lg font-medium text-gray-800">
        {question}
      </p>

      <div className="space-y-3">

        {options.map((option, index) => {

          const isSelected = selected === index;
          const isCorrect = index === correctAnswer;

          return (

            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full rounded-xl border p-4 text-left transition

              ${
                isSelected
                  ? isCorrect
                    ? "border-green-500 bg-green-100"
                    : "border-red-500 bg-red-100"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }
              `}
            >
              {option}
            </button>

          );

        })}

      </div>

      {selected !== null && (

        <div className="mt-6 rounded-xl bg-white p-4">

          {selected === correctAnswer ? (
            <p className="font-semibold text-green-600">
              ✅ Correct Answer!
            </p>
          ) : (
            <p className="font-semibold text-red-600">
              ❌ Incorrect. Try Again.
            </p>
          )}

        </div>

      )}

    </div>
  );
}