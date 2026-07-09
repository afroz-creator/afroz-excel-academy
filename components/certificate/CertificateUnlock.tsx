"use client";

import { tutorials } from "@/data/tutorials";
import { getCompletedLessons } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function CertificateUnlock() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(getCompletedLessons().length);
  }, []);

  const unlocked = completed === tutorials.length;

  return (
    <section className="mt-10 rounded-3xl bg-white shadow-lg p-8">

      <h2 className="text-3xl font-bold">
        🎓 Certificate
      </h2>

      <p className="mt-3 text-gray-600">
        Complete all lessons to unlock your certificate.
      </p>

      <div className="mt-8">

        {unlocked ? (

          <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-green-700">
              🎉 Congratulations!
            </h3>

            <p className="mt-3">
              You completed all Excel lessons.
            </p>

            <button
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
            >
              Download Certificate
            </button>

          </div>

        ) : (

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              🔒 Certificate Locked
            </h3>

            <p className="mt-3">
              Complete all lessons first.
            </p>

            <p className="mt-2 font-semibold">
              Progress: {completed} / {tutorials.length}
            </p>

          </div>

        )}

      </div>

    </section>
  );
}