// app/not-found.jsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="text-center" style={{ maxWidth: 720 }}>
        {/* Big Oops with image/gradient fill */}
        <h1 className="oops-text mb-2">Oops!</h1>
        <p className="fs-5 text-muted mb-4">404 – Page Not Found</p>

        {/* Optional illustration (remove if you don’t want it) */}
        <div className="mb-4">
          {/* Put your image at /public/img/404-illustration.png */}
          <img
            src="/img/nf.png"
            alt="Lost in space"
            width={260}
            height={160}
            className="img-fluid"
            priority
          />
        </div>

        <Link href="/" className="btn btn-primary rounded-pill px-4 py-2">
          Go to homepage
        </Link>
      </div>

      {/* Local styles (works with or without Tailwind) */}
    </main>
  );
}
