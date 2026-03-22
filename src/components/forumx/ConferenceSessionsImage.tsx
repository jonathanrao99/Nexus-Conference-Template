"use client";

import Image from "next/image";

export default function ConferenceSessionsImage() {
  return (
    <section className="bg-[#f4f4f5] -mt-8 pt-0 pb-4 lg:-mt-8 lg:pt-0 lg:pb-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1400&q=80"
            alt="Conference auditorium and breakout sessions"
            width={1400}
            height={700}
            className="h-auto w-full object-cover aspect-[2/1]"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
