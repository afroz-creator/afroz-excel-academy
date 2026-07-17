import type { DownloadFile } from "@/types/lesson";

interface DownloadBoxProps {
  files: DownloadFile[];
}

export default function DownloadBox({
  files,
}: DownloadBoxProps) {
  const getIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "pdf":
        return "📄";

      case "xlsx":
      case "xls":
        return "📊";

      case "doc":
      case "docx":
        return "📝";

      case "ppt":
      case "pptx":
        return "📽️";

      case "zip":
        return "🗂️";

      default:
        return "📁";
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold text-blue-700">
        📥 Lesson Downloads
      </h2>

      <div className="space-y-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:bg-blue-50 md:flex-row md:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">
                {getIcon(file.fileName)}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {file.title}
                </h3>

                <p className="text-gray-500">
                  {file.fileName}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {file.type} • {file.size}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {file.description}
                </p>
              </div>
            </div>

            <a
              href={file.href}
              download
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ⬇ Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}