import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ForumX Summit 2027",
  description: "News and updates from ForumX Summit.",
};

export default function BlogPage() {
  return (
    <main className="min-h-[60vh] bg-[#0a0a0f] pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <p className="mt-4 text-[#94a3b8]">Blog posts will be listed here.</p>
      </div>
    </main>
  );
}
