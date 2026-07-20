export default function ActivityCard() {
  const activities = [
    {
      title: "New Student Registered",
      time: "2 minutes ago",
    },
    {
      title: "Certificate Generated",
      time: "15 minutes ago",
    },
    {
      title: "Lesson Completed",
      time: "30 minutes ago",
    },
    {
      title: "Course Purchased",
      time: "1 hour ago",
    },
    {
      title: "New Quiz Submitted",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-green-600" />

            <div>

              <h3 className="font-semibold text-gray-800">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}