import React from "react";
import { Container } from "../ui/container";
import styles from "./footer.module.css";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className={styles.footer}>
      <Container size="xl">
        <div className={styles.grid}>
          {/* Brand & Purpose */}
          <div className={styles["brand-col"]}>
            <a href="#" className={styles.brand}>
              <span className={styles["brand-icon"]} aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </span>
              <span>Eventory</span>
            </a>
            <p className={styles.tagline}>
              “Every Event. Every Template. One Place.” A personal-use creative studio for discovering and customizing photo and video templates for life&apos;s moments.
            </p>
            <div className={styles["privacy-badge"]}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Local-First: Photos &amp; videos stay on your device</span>
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h4 className={styles["col-title"]}>Studio</h4>
            <ul className={styles["col-links"]}>
              <li>
                <a href="#explore">Explore Templates</a>
              </li>
              <li>
                <a href="#occasions">Occasion Categories</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#creators">Creator Community</a>
              </li>
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h4 className={styles["col-title"]}>Occasions</h4>
            <ul className={styles["col-links"]}>
              <li>
                <a href="#occasions">Graduations &amp; Milestones</a>
              </li>
              <li>
                <a href="#occasions">Birthdays &amp; Parties</a>
              </li>
              <li>
                <a href="#occasions">Weddings &amp; Receptions</a>
              </li>
              <li>
                <a href="#occasions">Travel &amp; Festivals</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Arch */}
        <div className={styles.bottom}>
          <p>© {currentYear} Eventory. All rights reserved. Personal creative studio.</p>
          <p>Built with Next.js App Router, TypeScript, and accessible CSS tokens.</p>
        </div>
      </Container>
    </footer>
  );
}
