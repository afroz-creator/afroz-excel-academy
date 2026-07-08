interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <span className="text-green-600 font-semibold uppercase">
          Afroz IT Solution
        </span>

        <h1 className="text-5xl font-bold mt-4 text-green-700">
          {title}
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Welcome to the <strong>{title}</strong> tutorial.
        </p>

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            Tutorial Content
          </h2>

          <p className="text-gray-600 leading-8">
            Yahan future me complete notes, images, videos,
            practice files aur quiz add kiye jayenge.
          </p>
        </div>

      </div>
    </main>
  );
}