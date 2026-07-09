"use client";

import { useState } from "react";

const questions = [
  {
    question: "1. Microsoft Excel is a ________ software.",
    options: [
      "Word Processing",
      "Spreadsheet",
      "Presentation",
      "Database",
    ],
    answer: "Spreadsheet",
  },
  {
    question: "2. Excel files are usually saved with which extension?",
    options: [
      ".docx",
      ".xlsx",
      ".pptx",
      ".txt",
    ],
    answer: ".xlsx",
  },
];

export default function LessonQuiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (questionIndex: number, option: string) => {
    const updated = [...answers];
    updated[questionIndex] = option;
    setAnswers(updated);
  };

  const checkAnswers = () => {
    let total = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-center">
          📝 Quick Quiz
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Test your understanding before moving to the next lesson.
        </p>

        <div className="mt-10 space-y-10">

          {questions.map((q, index) => (

            <div key={index}>

              <h3 className="text-xl font-semibold mb-5">
                {q.question}
              </h3>

              <div className="space-y-3">

                {q.options.map((option) => (

                  <label
                    key={option}
                    className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-green-50"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() =>
                        handleAnswer(index, option)
                      }
                    />

                    {option}

                  </label>

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-12">

          <button
            onClick={checkAnswers}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl"
          >
            Check Answers
          </button>

        </div>

        {score !== null && (

          <div className="mt-10 text-center bg-green-50 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-green-700">
              🎉 Your Score
            </h3>

            <p className="text-2xl mt-4">
              {score} / {questions.length}
            </p>

          </div>

        )}

      </div>

    </section>
  );
}