import Image from "next/image";

interface CertificatePreviewProps {
  studentName?: string;
}

export default function CertificatePreview({
  studentName = "Student Name",
}: CertificatePreviewProps) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative w-full max-w-6xl bg-[#faf8f3] rounded-3xl shadow-2xl overflow-hidden">

        {/* Top Green Strip */}
        <div className="h-6 bg-gradient-to-r from-green-800 via-green-600 to-green-800"></div>

        {/* Certificate */}
        <div className="relative p-16">

          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Afroz Excel Academy"
              width={110}
              height={110}
              priority
            />
          </div>

          {/* Academy Name */}
          <h1 className="mt-6 text-center text-5xl font-extrabold text-green-800 tracking-wide">
            AFROZ EXCEL ACADEMY
          </h1>

          <p className="text-center text-gray-600 mt-3 text-xl">
            Powered by Afroz IT Solution
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-full"></div>

          {/* Title */}
          <h2 className="mt-10 text-center text-4xl font-bold tracking-[6px] text-gray-800">
            CERTIFICATE OF COMPLETION
          </h2>

          <p className="text-center mt-8 text-gray-600 text-xl">
            This Certificate is Proudly Presented To
          </p>

          {/* Student Name */}
          <h3 className="mt-8 text-center text-6xl font-bold text-green-700">
            {studentName}
          </h3>

          <div className="w-96 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

          {/* Course */}
          <p className="mt-10 text-center text-xl text-gray-700">
            For Successfully Completing the
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold text-gray-900">
            Microsoft Excel Master Course
          </h2>

          <p className="mt-6 text-center text-lg text-gray-600">
            Demonstrating outstanding dedication, practical skills and
            professional knowledge in Microsoft Excel.
          </p>

          {/* Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="text-center">
              <p className="text-gray-500">Grade</p>

              <h3 className="text-3xl font-bold text-green-700">
                Excellent
              </h3>
            </div>

            <div className="text-center">
              <p className="text-gray-500">Completion Date</p>

              <h3 className="text-3xl font-bold text-green-700">
                15 July 2026
              </h3>
            </div>

            <div className="text-center">
              <p className="text-gray-500">Certificate ID</p>

              <h3 className="text-3xl font-bold text-green-700">
                AEA-2026-000001
              </h3>
            </div>

          </div>

          {/* Signatures */}
          <div className="grid md:grid-cols-3 gap-16 mt-24">

            <div className="text-center">
              <div className="border-t-2 border-gray-500"></div>

              <p className="mt-3 font-semibold">
                Instructor
              </p>
            </div>

            <div className="text-center">
              <div className="border-t-2 border-gray-500"></div>

              <p className="mt-3 font-semibold">
                Director
              </p>
            </div>

            <div className="text-center">
              <div className="border-t-2 border-gray-500"></div>

              <p className="mt-3 font-semibold">
                Official Seal
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Strip */}
        <div className="h-6 bg-gradient-to-r from-green-800 via-green-600 to-green-800"></div>

      </div>
    </div>
  );
}