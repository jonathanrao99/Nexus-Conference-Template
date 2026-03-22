import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | ForumX Summit 2027",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-[80vh] bg-[#0a0a0f] pt-28 flex items-center justify-center">
      <div className="mx-auto max-w-md px-6 text-center">
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <p className="mt-2 text-[#94a3b8]">
          Login functionality can be connected to your auth provider.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-[#3b82f6] hover:text-[#60a5fa] font-medium"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
