export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              Afroz IT Solution
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Learn Microsoft Excel from Basic to Advanced in Roman Hindi with
              Practical Projects, Practice Files and Interview Questions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">Tutorials</a></li>
              <li><a href="#" className="hover:text-green-400">Practice</a></li>
              <li><a href="#" className="hover:text-green-400">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 aits.sbp@gmail.com
            </p>

            <p className="mt-2 text-gray-400">
              🌍 India
            </p>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-500">
          © 2026 Afroz IT Solution. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}