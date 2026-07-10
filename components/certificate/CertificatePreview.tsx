import CertificateBorder from "./CertificateBorder";
import CertificateHeader from "./CertificateHeader";
import CertificateBody from "./CertificateBody";
import CertificateFooter from "./CertificateFooter";

interface CertificatePreviewProps {
  studentName?: string;
}

export default function CertificatePreview({
  studentName = "Student Name",
}: CertificatePreviewProps) {
  return (
    <div className="flex justify-center py-12">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#fffdf7] via-[#faf8f3] to-[#f7f2e7] shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

        {/* Luxury Background */}
        <div className="absolute inset-0">

          {/* Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fde68a,transparent_30%),radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_35%)] opacity-50"></div>

          {/* Paper Texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        </div>

        {/* Top Green Strip */}
        <div className="relative z-10 h-5 bg-gradient-to-r from-green-900 via-green-700 to-green-900"></div>

        {/* Premium Border */}
        <CertificateBorder />

        {/* Certificate Content */}
        <div className="relative z-10 px-16 py-14">

          <CertificateHeader />

          <CertificateBody
            studentName={studentName}
          />

          <CertificateFooter />

        </div>

        {/* Bottom Green Strip */}
        <div className="relative z-10 h-5 bg-gradient-to-r from-green-900 via-green-700 to-green-900"></div>

      </div>
    </div>
  );
}