// app/_components/ResortShowcase.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ResortShowcase() {
  const items = [
    {
      title: "Lily Beach Resort & Spa",
      desc: "Pioneering all inclusive resort",
      img: "/img/rs1.webp",
    },
    {
      title: "Hideaway Beach Resort & Spa",
      desc: "Featuring all suites and unparalleled privacy",
      img: "/img/rs2.webp",
    },
    {
      title: "The Signature Collection By Hideaway",
      desc: "Offering a set of Exclusive Nine Ultra Luxurious Villas",
      img: "/img/rs3.webp",
    },
  ];

  return (
    <section className="container-fluid my-4 my-lg-5 py-[80px]">
      {/* title heading */}
      <div className="cs_section_heading cs_style_1 text-center">
        <h3
          className="cs_section_title_up cs_ternary_font cs_accent_color cs_normal cs_fs_24"
          style={{ color: "#2ecc71", fontFamily: "Satisfy" }}
        >
          Explore Now
        </h3>
        <h2
          className="cs_section_title cs_semibold cs_fs_56 mb-0 wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
          style={{ fontFamily: "Playfair" }}
        >
          Featured Resorts
        </h2>
      </div>
      <div className="cs_height_55 cs_height_lg_40" />
      <div className="row g-4">
        {items.map((it, i) => (
          <div className="col-12 col-lg-4" key={i}>
            <article className="resort-tile position-relative rounded-4 overflow-hidden">
              <Image
                src={it.img}
                alt={it.title}
                fill
                sizes="(max-width: 992px) 100vw, 33vw"
                className="tile-img"
                priority={i === 0}
              />
              <div className="tile-overlay" />
              <div className="tile-content text-white">
                <h3 className="h5 mb-2">{it.title}</h3>
                <p className="mb-3 small opacity-90">{it.desc}</p>
                <Link href="/booking" className="book-link flex items-center">
                  BOOK NOW
                  <svg
                    className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* tiny, local CSS – no extra files needed */}
    </section>
  );
}
