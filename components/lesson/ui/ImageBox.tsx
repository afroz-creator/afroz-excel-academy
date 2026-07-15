interface ImageBoxProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBox({
  src,
  alt,
  caption,
}: ImageBoxProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl border"
      />

      {caption && (
        <p className="mt-4 text-center text-gray-500 italic">
          {caption}
        </p>
      )}

    </div>
  );
}