import type { Lesson } from "@/types/lesson";

import ExplanationBox from "@/components/lesson/ui/ExplanationBox";
import TipBox from "@/components/lesson/ui/TipBox";
import WarningBox from "@/components/lesson/ui/WarningBox";
import FormulaBox from "@/components/lesson/ui/FormulaBox";
import PracticeBox from "@/components/lesson/ui/PracticeBox";
import ImageBox from "@/components/lesson/ui/ImageBox";
import DownloadBox from "@/components/lesson/ui/DownloadBox";
import QuizBox from "@/components/lesson/ui/QuizBox";

interface LessonPlayerContentProps {
  lesson: Lesson;
}

export default function LessonPlayerContent({
  lesson,
}: LessonPlayerContentProps) {
  return (
    <div className="space-y-8">

      {/* Video */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">

          <div className="text-center text-white">

            <div className="mb-6 text-7xl">
              ▶️
            </div>

            <h2 className="text-3xl font-bold">
              Lesson Preview
            </h2>

            <p className="mt-3 text-slate-300">
              Video will be added later.
            </p>

          </div>

        </div>

      </div>

      {/* Lesson Header */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {lesson.module}
        </span>

        <h1 className="mt-5 text-4xl font-bold text-gray-900">
          {lesson.title}
        </h1>

        <div className="mt-5 flex gap-6 text-gray-600">

          <span>⏱ {lesson.duration}</span>

          <span>📘 {lesson.type}</span>

        </div>

      </div>

      {/* Explanation */}
      <ExplanationBox title="What will you learn?">
        {lesson.explanation.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ExplanationBox>

      {/* Image */}
      {lesson.image && (
        <ImageBox
          src={lesson.image.src}
          alt={lesson.image.alt}
          caption={lesson.image.caption}
        />
      )}

      {/* Tip */}
      <TipBox>
        {lesson.tip}
      </TipBox>

      {/* Warning */}
      <WarningBox>
        {lesson.warning}
      </WarningBox>

      {/* Formula */}
      <FormulaBox
        title={lesson.formula.title}
        formula={lesson.formula.code}
        explanation={lesson.formula.explanation}
      />

      {/* Practice */}
      <PracticeBox
        tasks={lesson.practice}
      />

      {/* Downloads */}
      <DownloadBox
        files={lesson.downloads}
      />

      {/* Quiz */}
      <QuizBox
        question={lesson.quiz.question}
        options={lesson.quiz.options}
        correctAnswer={lesson.quiz.correctAnswer}
      />

    </div>
  );
}