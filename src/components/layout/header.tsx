"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import styles from "./header.module.css";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container size="xl">
        <div className={styles.inner}>
          {/* Brand Wordmark */}
          <Link href="/" className={styles.brand} onClick={closeMobileMenu}>
            <span className={styles["brand-icon"]} aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </span>
            <span className={styles["brand-text"]}>Eventory</span>
            <span className={styles["brand-badge"]}>Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles["nav-desktop"]} aria-label="Main Navigation">
            <a href="#explore" className={styles["nav-link"]}>
              Explore
            </a>
            <a href="#occasions" className={styles["nav-link"]}>
              Occasions
            </a>
            <a href="#how-it-works" className={styles["nav-link"]}>
              How It Works
            </a>
            <a href="#creators" className={styles["nav-link"]}>
              Creators
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className={styles["actions-desktop"]}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const target = document.getElementById("how-it-works");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How It Works
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const target = document.getElementById("explore");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Templates
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles["mobile-toggle"]}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`${styles["mobile-menu"]} ${mobileMenuOpen ? styles.open : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <a href="#explore" className={styles["mobile-nav-link"]} onClick={closeMobileMenu}>
          Explore Templates
        </a>
        <a href="#occasions" className={styles["mobile-nav-link"]} onClick={closeMobileMenu}>
          Occasions
        </a>
        <a href="#how-it-works" className={styles["mobile-nav-link"]} onClick={closeMobileMenu}>
          How It Works
        </a>
        <a href="#creators" className={styles["mobile-nav-link"]} onClick={closeMobileMenu}>
          Creator Community
        </a>
        <div className={styles["mobile-actions"]}>
          <Button
            variant="primary"
            fullWidth
            onClick={() => {
              closeMobileMenu();
              const target = document.getElementById("explore");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Templates
          </Button>
        </div>
      </div>
    </header>
  );
}
