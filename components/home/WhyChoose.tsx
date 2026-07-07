import {
  BookOpen,
  Download,
  FolderOpen,
  GraduationCap,
  PlayCircle,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Roman Hindi Tutorials",
    desc: "Easy language for beginners.",
  },
  {
    icon: PlayCircle,
    title: "Video Lessons",
    desc: "Step-by-step practical videos.",
  },
  {
    icon: FolderOpen,
    title: "Real Projects",
    desc: "Practice with real Excel files.",
  },
  {
    icon: Download,
    title: "Download Notes",
    desc: "PDF notes and practice sheets.",
  },
  {
    icon: GraduationCap,
    title: "Interview Questions",
    desc: "Job-ready preparation.",
  },
  {
    icon: Trophy,
    title: "Expert Guidance",
    desc: "Learn from basic to advanced.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Afroz IT Solution
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to master Microsoft Excel in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8"
              >
                <Icon className="text-green-600" size={42} />

                <h3 className="text-2xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}