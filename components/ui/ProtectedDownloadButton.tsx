"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";

interface ProtectedDownloadButtonProps {
  file: string;
  title?: string;
}

export default function ProtectedDownloadButton({
  file,
  title = "Download",
}: ProtectedDownloadButtonProps) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function handleDownload() {
    if (!user) {
      alert("Please login to download this file.");
      router.push("/login");
      return;
    }

    window.open(file, "_blank");
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
    >
      <Download size={20} />

      {title}
    </button>
  );
}