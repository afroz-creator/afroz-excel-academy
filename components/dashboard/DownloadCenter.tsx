import { Download, FileText, FileSpreadsheet, FileArchive } from "lucide-react";

const downloads = [
  {
    title: "Certificate (PDF)",
    description: "Download your course completion certificate.",
    icon: Download,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Excel Notes",
    description: "Complete notes for all Excel lessons.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Practice Files",
    description: "Download practice Excel workbooks.",
    icon: FileSpreadsheet,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Projects",
    description: "Real-world Excel project files.",
    icon: FileArchive,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function DownloadCenter() {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Download Center
        </h2>

        <p className="mt-1 text-gray-500">
          Access certificates, notes, practice files and projects.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {downloads.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-5 transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>

                  <button
                    className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
                  >
                    Download
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}