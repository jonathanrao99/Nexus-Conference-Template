import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | ForumX Summit 2027",
  description: "Privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[80vh] bg-black pt-28 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Privacy</h1>
        <p className="mt-4 text-white/80">Privacy policy content will go here.</p>
        <Link href="/" className="mt-6 inline-block text-white/80 hover:text-white underline">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
