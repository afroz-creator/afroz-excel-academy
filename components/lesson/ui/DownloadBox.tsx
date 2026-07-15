interface DownloadItem {
  title: string;
  fileName: string;
  href: string;
}

interface DownloadBoxProps {
  files: DownloadItem[];
}

export default function DownloadBox({
  files,
}: DownloadBoxProps) {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">

      <div className="mb-5 flex items-center gap-2">
        <span className="text-2xl">📂</span>

        <h3 className="text-2xl font-bold text-emerald-700">
          Download Resources
        </h3>
      </div>

      <div className="space-y-4">
        {files.map((file, index) => (
          <a
            key={index}
            href={file.href}
            download
            className="flex items-center justify-between rounded-xl border bg-white p-4 transition hover:bg-gray-50"
          >
            <div>
              <p className="font-semibold text-gray-800">
                {file.title}
              </p>

              <p className="text-sm text-gray-500">
                {file.fileName}
              </p>
            </div>

            <span className="text-xl">
              ⬇️
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}