import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | ForumX Summit 2027",
  description: "Conference schedule and agenda.",
};

export default function AgendaPage() {
  return (
    <main className="min-h-[60vh] bg-[#0a0a0f] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Agenda</h1>
        <p className="mt-4 text-[#94a3b8]">Full schedule will be published soon.</p>
      </div>
    </main>
  );
}
