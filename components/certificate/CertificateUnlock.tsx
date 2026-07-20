"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { tutorials } from "@/data/tutorials";
import { getCompletedLessons } from "@/lib/progress";

export default function CertificateUnlock() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    async function loadProgress() {
      const user = auth.currentUser;

      if (!user) return;

      const lessonsCompleted = await getCompletedLessons(user.uid);

      setCompleted(lessonsCompleted);
    }

    loadProgress();
  }, []);

  const unlocked = completed >= tutorials.length;

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        🎓 Certificate
      </h2>

      <p className="mt-3 text-gray-600">
        Complete all lessons to unlock your certificate.
      </p>

      <div className="mt-8">

        {unlocked ? (
          <div className="rounded-2xl border-2 border-green-500 bg-green-100 p-6">

            <h3 className="text-2xl font-bold text-green-700">
              🎉 Congratulations!
            </h3>

            <p className="mt-3">
              You completed all Excel lessons.
            </p>

            <button className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700">
              Download Certificate
            </button>

          </div>
        ) : (
          <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-100 p-6">

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