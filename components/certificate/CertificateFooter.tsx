export default function CertificateFooter() {
  return (
    <div className="mt-24">

      {/* Footer Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rounded-full"></div>

      <div className="grid grid-cols-4 gap-10 mt-14 items-end">

        {/* Instructor */}
        <div className="text-center">

          <div className="text-5xl">✍️</div>

          <div className="border-t-2 border-gray-500 mt-6"></div>

          <h3 className="mt-3 font-bold text-lg">
            Instructor
          </h3>

          <p className="text-gray-500 text-sm">
            Afroz Excel Academy
          </p>

        </div>

        {/* Director */}
        <div className="text-center">

          <div className="text-5xl">👨‍💼</div>

          <div className="border-t-2 border-gray-500 mt-6"></div>

          <h3 className="mt-3 font-bold text-lg">
            Director
          </h3>

          <p className="text-gray-500 text-sm">
            Afroz IT Solution
          </p>

        </div>

        {/* Gold Seal */}
        <div className="flex justify-center">

          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 border-[6px] border-yellow-200 shadow-2xl flex flex-col items-center justify-center">

            <div className="text-4xl">
              🏅
            </div>

            <p className="text-[11px] font-bold text-center text-white leading-4 mt-2 px-2">
              OFFICIAL
              <br />
              AFROZ
              <br />
              CERTIFIED
            </p>

          </div>

        </div>

        {/* QR Code Placeholder */}
        <div className="text-center">

          <div className="w-32 h-32 border-4 border-gray-700 bg-gray-100 mx-auto rounded-lg flex items-center justify-center">

            <span className="text-5xl">
              📱
            </span>

          </div>

          <p className="mt-3 text-sm text-gray-600">
            Scan to Verify
          </p>

        </div>

      </div>
       

      {/* Bottom Text */}
      <div className="mt-16 text-center">

        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Learn • Practice • Achieve
        </p>

        <p className="mt-2 text-xs text-gray-400">
          © 2026 Afroz Excel Academy • All Rights Reserved
        </p>

      </div>

    </div>
  );
}