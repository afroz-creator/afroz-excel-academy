interface CertificateBodyProps {
  studentName: string;
}

export default function CertificateBody({
  studentName,
}: CertificateBodyProps) {
  return (
    <div className="mt-16 text-center">

      {/* Student Name */}
      <h2 className="text-6xl font-bold text-green-800 tracking-wide">
        {studentName}
      </h2>

      <div className="w-80 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 mx-auto mt-4 rounded-full"></div>

      {/* Description */}
      <p className="mt-10 text-2xl text-gray-700">
        For Successfully Completing the
      </p>

      {/* Course */}
      <h3 className="mt-4 text-4xl font-extrabold text-gray-900">
        Microsoft Excel Master Course
      </h3>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
        This certificate recognizes outstanding dedication,
        practical knowledge, and successful completion of the
        Microsoft Excel Master Course conducted by
        <span className="font-semibold text-green-700">
          {" "}
          Afroz Excel Academy
        </span>.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16">

        <div className="bg-green-50 rounded-xl p-6 shadow">
          <p className="text-gray-500">Grade</p>

          <h4 className="mt-2 text-3xl font-bold text-green-700">
            Excellent
          </h4>
        </div>

        <div className="bg-green-50 rounded-xl p-6 shadow">
          <p className="text-gray-500">Completion Date</p>

          <h4 className="mt-2 text-3xl font-bold text-green-700">
            15 July 2026
          </h4>
        </div>

        <div className="bg-green-50 rounded-xl p-6 shadow">
          <p className="text-gray-500">Certificate ID</p>

          <h4 className="mt-2 text-2xl font-bold text-green-700">
            AEA-2026-000001
          </h4>
        </div>

      </div>

    </div>
  );
}