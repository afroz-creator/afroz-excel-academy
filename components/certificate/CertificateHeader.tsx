import Image from "next/image";

export default function CertificateHeader() {
  return (
    <div className="relative text-center">

      {/* Logo */}
      <div className="flex justify-center">
        <div className="bg-white rounded-full p-4 shadow-xl border-4 border-yellow-400">
          <Image
            src="/logo.png"
            alt="Afroz Excel Academy"
            width={110}
            height={110}
            priority
          />
        </div>
      </div>

      {/* Academy Name */}
      <h1 className="mt-8 text-5xl font-extrabold tracking-wider text-green-900">
        AFROZ EXCEL ACADEMY
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-lg tracking-[4px] uppercase text-yellow-700 font-semibold">
        A Premium Learning Platform by Afroz IT Solution
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center mt-8">

        <div className="w-28 h-[2px] bg-yellow-500"></div>

        <div className="mx-4 w-4 h-4 rounded-full bg-yellow-500"></div>

        <div className="w-28 h-[2px] bg-yellow-500"></div>

      </div>

      {/* Certificate Title */}
      <h2 className="mt-10 text-4xl font-bold tracking-[8px] text-gray-800">
        CERTIFICATE OF COMPLETION
      </h2>

      <p className="mt-4 text-gray-600 text-xl italic">
        This certificate is proudly presented to
      </p>

    </div>
  );
}