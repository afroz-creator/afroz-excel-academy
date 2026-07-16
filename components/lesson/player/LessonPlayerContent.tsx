import type { Lesson } from "@/types/lesson";

import ExcelInterfaceInfo from "@/components/lesson/ui/ExcelInterfaceInfo";
import ComparisonTable from "@/components/lesson/ui/ComparisonTable";
import HistoryTimeline from "@/components/lesson/ui/HistoryTimeline";
import ShortcutTable from "@/components/lesson/ui/ShortcutTable";

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
    <div className="space-y-6">

      {/* Video */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-emerald-500">

          <div className="text-center text-white">

            <div className="mb-6 text-7xl">
              🎥
            </div>

            <h2 className="text-3xl font-bold">
              Microsoft Excel Course
            </h2>

            <p className="mt-3 text-green-100">
              Video jaldi add kiya jayega.
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

        <p className="mt-4 text-lg text-gray-600">
          {lesson.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-gray-600">

          <span>⏱ {lesson.duration}</span>

          <span>📘 {lesson.type}</span>

        </div>

      </div>

      {/* Learning Objectives */}
      <div className="rounded-3xl border border-green-200 bg-green-50 p-6 shadow-sm">

        <h2 className="mb-5 text-2xl font-bold text-green-700">
          🎯 Is Lesson me Aap Kya Seekhenge?
        </h2>

        <ul className="space-y-3">

          {lesson.learningObjectives.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white p-3"
            >

              <span className="text-green-600">
                ✅
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

      {/* History Timeline */}
      <HistoryTimeline
        items={lesson.history}
      />

      {/* Explanation */}
      <ExplanationBox title="📖 Lesson Explanation">

        {lesson.explanation.map((item, index) => (

          <p key={index}>
            {item}
          </p>

        ))}

      </ExplanationBox>

      {/* Excel Interface Image */}
      {lesson.image && (

        <ImageBox
          src={lesson.image.src}
          alt={lesson.image.alt}
          caption={lesson.image.caption}
        />

      )}

      {/* Excel Interface Parts */}
      <ExcelInterfaceInfo
        items={lesson.excelInterface}
      />

      {/* Workbook vs Worksheet Table */}
      <ComparisonTable
        title="Workbook vs Worksheet"
        rows={lesson.comparison}
      />

      {/* Workbook vs Worksheet Image */}
      {lesson.comparisonImage && (

        <ImageBox
          src={lesson.comparisonImage.src}
          alt={lesson.comparisonImage.alt}
          caption={lesson.comparisonImage.caption}
        />

      )}

      {/* Excel Shortcut Keys */}

      <ShortcutTable
        shortcuts={lesson.shortcuts}
      />

      {/* Tip */}
      <TipBox>
        {lesson.tip}
      </TipBox>

      {/* Did You Know */}
      <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">

        <h2 className="mb-4 text-2xl font-bold text-blue-700">
          💡 Kya Aap Jaante Hain?
        </h2>

        <p className="text-gray-700">
          {lesson.didYouKnow}
        </p>

      </div>

      {/* Common Mistake */}
      <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">

        <h2 className="mb-4 text-2xl font-bold text-yellow-700">
          ⚠️ Common Mistake
        </h2>

        <p className="text-gray-700">
          {lesson.commonMistake}
        </p>

      </div>

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

      {/* Summary */}
      <div className="rounded-3xl border border-green-200 bg-green-50 p-6 shadow-sm">

        <h2 className="mb-5 text-2xl font-bold text-green-700">
          📚 Lesson Summary
        </h2>

        <ul className="space-y-3">

          {lesson.summary.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white p-3"
            >

              <span>✅</span>

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

      {/* Assignment */}
      <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm">

        <h2 className="mb-5 text-2xl font-bold text-indigo-700">
          📝 Ghar Ka Kaam (Assignment)
        </h2>

        <ol className="list-decimal space-y-3 pl-6">

          {lesson.assignment.map((item, index) => (

            <li key={index}>
              {item}
            </li>

          ))}

        </ol>

      </div>

    </div>
  );
}