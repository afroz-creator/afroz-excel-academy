export default function CertificateBorder() {
  return (
    <>
      {/* Outer Gold Border */}
      <div className="absolute inset-4 rounded-[32px] border-[6px] border-yellow-500 pointer-events-none"></div>

      {/* Inner Green Border */}
      <div className="absolute inset-8 rounded-[26px] border-[3px] border-green-800 pointer-events-none"></div>

      {/* Thin Gold Border */}
      <div className="absolute inset-10 rounded-[22px] border border-yellow-300 pointer-events-none"></div>

      {/* Top Left Corner */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-yellow-500 rounded-tl-3xl"></div>

      {/* Top Right Corner */}
      <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-yellow-500 rounded-tr-3xl"></div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-yellow-500 rounded-bl-3xl"></div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-yellow-500 rounded-br-3xl"></div>

      {/* Decorative Top Dots */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </div>

      
    </>
  );
}