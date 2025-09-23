// components/TourPackages.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

// Replace image paths with your own assets under /public/resorts/*
const RESORTS = [
  {
    title: "NOOE Maldives Kunaavashi",
    img: "/img/gl1.webp",
    rating: 5,
    href: "/allResorts/",
  },
  {
    title: "Holiday Inn Resort Kandooma Maldives",
    img: "/img/gl2.webp",
    rating: 4.5,
    href: "/allResorts/",
  },
  {
    title: "W Maldives",
    img: "/img/gl3.webp",
    href: "/allResorts/",
    rating: 5,
  },
  {
    title: "Kandima Maldives",
    img: "/img/rs1.webp",
    href: "/allResorts/",
    rating: 4.5,
  },
  {
    title: "The Ritz-Carlton Maldives, Fari Islands",
    img: "/img/rs2.webp",
    href: "/allResorts/",
    rating: 5,
  },
  {
    title: "Adaaran Prestige Water Villas",
    img: "/img/rs3.webp",
    href: "/allResorts/",
    rating: 4.5,
  },
];

function Stars({ rating = 5 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const Star = ({ type }) => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className="inline-block"
    >
      {type === "full" && (
        <path
          fill="#FFC83D"
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
        />
      )}
      {type === "half" && (
        <>
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#FFC83D" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            stroke="#FFC83D"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
          />
        </>
      )}
      {type === "empty" && (
        <path
          fill="none"
          stroke="#FFC83D"
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
        />
      )}
    </svg>
  );

  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} type="full" />
      ))}
      {half === 1 && <Star type="half" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} type="empty" />
      ))}
    </span>
  );
}

export default function TourPackages() {
  return (
    <section>
      <div className="cs_height_140 cs_height_lg_80" />
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESORTS.map((r) => (
            <article key={r.title} className="resort-card">
              {/* Image */}
              <Link href={r.href} className="resort-thumb">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="resort-img"
                  priority={false}
                />
                {/* gradient for legibility */}
                <div className="resort-overlay" />
                {/* stars row */}
                <div className="resort-stars">
                  <Stars rating={r.rating} />
                </div>
                {/* title bar */}
                <div className="resort-title">
                  <span style={{ fontFamily: "playfair" }}>{r.title}</span>
                </div>
              </Link>

              {/* action row (button only, renamed) */}
              <div className="resort-action flex items-center justify-around">
                <h2 className="text-[40px] font-black mont">$4500</h2>
                <Link href={r.href} className="view-btn">
                  View Resort
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="cs_height_140 cs_height_lg_80" />

      {/* Scoped CSS */}
    </section>
  );
}
