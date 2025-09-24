"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.nfWrap}>
      {/* Background decoration */}
      <div className={styles.nfBg}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={styles.grid} />
      </div>

      {/* Card */}
      <section className={styles.nfCard}>
        <span className={styles.badgeSoft}>Error</span>

        <h1 className={styles.nf404}>
          4<span className={styles.zero}>0</span>4
        </h1>

        <h2 className={styles.nfTitle}>Oops! Page not found</h2>
        <p className={styles.nfSub}>
          The page you’re looking for has moved, been renamed, or never existed.
        </p>

        <div className={styles.nfIllustration}>
          <Image
            src="/img/nf.png"
            alt="Lost in space"
            width={520}
            height={320}
            priority
            className={styles.floaty}
          />
        </div>

        {/* Actions */}
        <div className={styles.nfActions}>
          <Link href="/" className={`btn btn-primary ${styles.nfBtn}`}>
            ← Back to Home
          </Link>
          <Link
            href="/sitemap"
            className={`btn btn-outline-primary ${styles.nfBtn}`}
          >
            View Sitemap
          </Link>
          <Link
            href="/contact"
            className={`btn btn-outline-secondary ${styles.nfBtn}`}
          >
            Contact Support
          </Link>
        </div>

        {/* Search */}
      </section>
    </main>
  );
}
