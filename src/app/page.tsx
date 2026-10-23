"use client";

import React, { useState, useMemo } from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Container } from "../components/ui/container";
import { Section } from "../components/ui/section";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { OCCASION_CATEGORIES } from "../data/occasions";
import { DEMO_TEMPLATES, type DemoTemplate, type TemplateFormat } from "../data/demo-templates";
import { TemplateCardArt } from "../components/templates/template-card-art";
import { TemplatePreviewModal } from "../components/templates/template-preview-modal";
import styles from "./page.module.css";

export default function HomePage() {
  // Filter States
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<"all" | TemplateFormat>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Inspect Modal State
  const [inspectedTemplate, setInspectedTemplate] = useState<DemoTemplate | null>(null);

  // Filtered Templates
  const filteredTemplates = useMemo(() => {
    return DEMO_TEMPLATES.filter((template) => {
      const matchesOccasion =
        selectedOccasion === "all" || template.occasionId === selectedOccasion;
      const matchesFormat =
        selectedFormat === "all" || template.format === selectedFormat;
      const matchesSearch =
        searchQuery.trim() === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesOccasion && matchesFormat && matchesSearch;
    });
  }, [selectedOccasion, selectedFormat, searchQuery]);

  const scrollToExplore = () => {
    const el = document.getElementById("explore");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOccasionCardClick = (occasionId: string) => {
    setSelectedOccasion(occasionId);
    scrollToExplore();
  };

  return (
    <div className={styles["page-wrapper"]}>
      {/* Sticky Navigation Header */}
      <Header />

      <main id="main-content">
        {/* ==========================================================================
            1. Hero Section
            ========================================================================== */}
        <section className={styles["hero-section"]}>
          <Container size="xl">
            <div className={styles["hero-grid"]}>
              {/* Content Column */}
              <div className={styles["hero-content"]}>
                <div className={styles["hero-badge-wrap"]}>
                  <Badge variant="indigo" dot>
                    Every Event. Every Template. One Place.
                  </Badge>
                </div>

                <h1 className={styles["hero-title"]}>
                  Personal photo &amp; video templates for{" "}
                  <span className={styles["hero-title-accent"]}>life’s moments.</span>
                </h1>

                <p className={styles["hero-subtitle"]}>
                  Eventory is a personal-use creative studio for discovering, customizing, and
                  rendering memorable photo and video templates — with all your media staying
                  completely private on your device.
                </p>

                <div className={styles["hero-actions"]}>
                  <Button variant="primary" size="lg" onClick={scrollToExplore}>
                    Explore Templates
                  </Button>
                  <Button variant="secondary" size="lg" onClick={scrollToHowItWorks}>
                    See How It Works
                  </Button>
                </div>

                <div className={styles["hero-privacy-note"]}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                  <span>
                    <strong>Local-First Architecture:</strong> Designed so your personal photos and
                    video clips remain private on your device without server-side storage.
                  </span>
                </div>
              </div>

              {/* Visual Collage Column */}
              <div className={styles["hero-collage"]}>
                <div className={styles["collage-stack"]}>
                  {/* Left Back Card */}
                  <div className={styles["collage-card-back-left"]}>
                    <TemplateCardArt
                      title="Golden Commencement"
                      format="video"
                      aspectRatio="9:16"
                      accent="indigo"
                      duration="15s"
                    />
                  </div>

                  {/* Right Back Card */}
                  <div className={styles["collage-card-back-right"]}>
                    <TemplateCardArt
                      title="Champagne Highlights"
                      format="video"
                      aspectRatio="16:9"
                      accent="amber"
                      duration="30s"
                    />
                  </div>

                  {/* Main Center Card */}
                  <div className={styles["collage-card-main"]}>
                    <TemplateCardArt
                      title="Neon Confetti Birthday"
                      format="video"
                      aspectRatio="9:16"
                      accent="pink"
                      duration="12s"
                    />
                  </div>

                  {/* Floating studio feature badge */}
                  <div className={styles["floating-pill"]}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ color: "var(--color-indigo-600)" }}
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>Curated Motion &amp; Photo Layouts</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ==========================================================================
            2. Occasion Categories Section
            ========================================================================== */}
        <Section id="occasions" spacing="lg" surface="subtle" bordered>
          <Container size="xl">
            <div className={styles["section-header"]}>
              <Badge variant="neutral" size="sm">
                Celebrations &amp; Milestones
              </Badge>
              <h2 className={styles["section-title"]}>Templates for Every Occasion</h2>
              <p className={styles["section-desc"]}>
                Whether commemorating an academic milestone, celebrating another year, or
                curating travel memories, jump straight to templates crafted for your story.
              </p>
            </div>

            <div className={styles["occasions-grid"]}>
              {OCCASION_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className={styles["occasion-card"]}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOccasionCardClick(cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOccasionCardClick(cat.id);
                    }
                  }}
                  aria-label={`Filter templates by ${cat.name}`}
                >
                  <div
                    className={`${styles["occasion-icon-wrap"]} ${styles[`occasion-icon-wrap-${cat.accent}`]}`}
                    aria-hidden="true"
                  >
                    {cat.icon === "mortarboard" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    )}
                    {cat.icon === "cake" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                        <path d="M2 21h20" />
                        <path d="M7 8v2" />
                        <path d="M12 8v2" />
                        <path d="M17 8v2" />
                        <path d="M7 4h.01" />
                        <path d="M12 4h.01" />
                        <path d="M17 4h.01" />
                      </svg>
                    )}
                    {cat.icon === "heart" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                    {cat.icon === "compass" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                      </svg>
                    )}
                    {cat.icon === "sparkles" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    )}
                    {cat.icon === "clock" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                    {cat.icon === "camera" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    )}
                  </div>
                  <div className={styles["occasion-info"]}>
                    <h3 className={styles["occasion-name"]}>{cat.name}</h3>
                    <p className={styles["occasion-tagline"]}>{cat.tagline}</p>
                  </div>
                  <span className={styles["occasion-count"]}>{cat.countLabel} →</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ==========================================================================
            3. Featured Templates Section
            ========================================================================== */}
        <Section id="explore" spacing="lg" surface="default">
          <Container size="xl">
            <div className={styles["section-header"]}>
              <Badge variant="indigo" size="sm">
                Explore Studio Designs
              </Badge>
              <h2 className={styles["section-title"]}>Featured Template Catalog</h2>
              <p className={styles["section-desc"]}>
                Discover responsive video stories, animated reels, and photo collages. Inspect
                media slots and animation pacing before creating your own.
              </p>
            </div>

            {/* Interactive Filter Bar */}
            <div className={styles["filter-bar"]}>
              <div className={styles["filter-row"]}>
                {/* Occasion Filter Buttons */}
                <div className={styles["occasion-pills"]} role="radiogroup" aria-label="Filter by occasion">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={selectedOccasion === "all"}
                    className={`${styles["pill-btn"]} ${selectedOccasion === "all" ? styles["pill-active"] : ""}`}
                    onClick={() => setSelectedOccasion("all")}
                  >
                    All Moments
                  </button>
                  {OCCASION_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="radio"
                      aria-checked={selectedOccasion === cat.id}
                      className={`${styles["pill-btn"]} ${selectedOccasion === cat.id ? styles["pill-active"] : ""}`}
                      onClick={() => setSelectedOccasion(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className={styles["search-input-wrap"]}>
                  <Input
                    type="search"
                    placeholder="Search templates or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    leftElement={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Format Filter Row */}
              <div className={styles["format-selectors"]} role="radiogroup" aria-label="Filter by format">
                <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-tertiary)", fontWeight: "500" }}>
                  Format:
                </span>
                <button
                  type="button"
                  role="radio"
                  aria-checked={selectedFormat === "all"}
                  className={`${styles["pill-btn"]} ${selectedFormat === "all" ? styles["pill-active"] : ""}`}
                  onClick={() => setSelectedFormat("all")}
                >
                  All Formats
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={selectedFormat === "video"}
                  className={`${styles["pill-btn"]} ${selectedFormat === "video" ? styles["pill-active"] : ""}`}
                  onClick={() => setSelectedFormat("video")}
                >
                  Video Stories
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={selectedFormat === "photo"}
                  className={`${styles["pill-btn"]} ${selectedFormat === "photo" ? styles["pill-active"] : ""}`}
                  onClick={() => setSelectedFormat("photo")}
                >
                  Photo Collages
                </button>
              </div>
            </div>

            {/* Templates Grid */}
            {filteredTemplates.length > 0 ? (
              <div className={styles["templates-grid"]}>
                {filteredTemplates.map((template) => (
                  <article key={template.id} className={styles["template-card"]}>
                    <TemplateCardArt
                      title={template.title}
                      format={template.format}
                      aspectRatio={template.aspectRatio}
                      accent={template.accent}
                      duration={template.duration}
                    />
                    <div className={styles["template-card-body"]}>
                      <div className={styles["template-card-meta"]}>
                        <Badge variant={template.accent} size="sm">
                          {template.occasionName}
                        </Badge>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                          {template.aspectRatio}
                        </span>
                      </div>
                      <h3 className={styles["template-card-title"]}>{template.title}</h3>
                      <p className={styles["template-card-desc"]}>{template.description}</p>
                      <div className={styles["template-tags"]}>
                        {template.tags.map((tag, idx) => (
                          <span key={idx} className={styles["template-tag"]}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        fullWidth
                        style={{ marginTop: "var(--space-2)" }}
                        onClick={() => setInspectedTemplate(template)}
                      >
                        Inspect Template
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles["empty-state"]}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-tertiary)" }}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <h3 style={{ fontSize: "var(--font-size-base)", color: "var(--text-primary)" }}>
                  No templates match your filters
                </h3>
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--text-secondary)", maxWidth: "40ch" }}>
                  Try resetting the occasion category, clearing your search query, or switching between photo and video formats.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedOccasion("all");
                    setSelectedFormat("all");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </Container>
        </Section>

        {/* ==========================================================================
            4. How Eventory Works Section
            ========================================================================== */}
        <Section id="how-it-works" spacing="lg" surface="subtle" bordered>
          <Container size="xl">
            <div className={styles["section-header"]}>
              <Badge variant="indigo" size="sm">
                Simple &amp; Private
              </Badge>
              <h2 className={styles["section-title"]}>How Eventory Works</h2>
              <p className={styles["section-desc"]}>
                Create studio-quality photo collages and motion video reels in three intuitive steps.
              </p>
            </div>

            <div className={styles["steps-grid"]}>
              <div className={styles["step-card"]}>
                <span className={styles["step-number"]}>1</span>
                <h3 className={styles["step-title"]}>Discover</h3>
                <p className={styles["step-desc"]}>
                  Explore a rich gallery of templates purpose-built for life’s occasions. Filter by
                  graduations, weddings, birthdays, travel recaps, or daily moments in 9:16, 1:1, or 16:9 ratios.
                </p>
              </div>

              <div className={styles["step-card"]}>
                <span className={styles["step-number"]}>2</span>
                <h3 className={styles["step-title"]}>Personalize</h3>
                <p className={styles["step-desc"]}>
                  Select photos and video clips directly from your computer or phone. Customize
                  typography, honorary degrees, milestone dates, and colors with instant live previews.
                </p>
              </div>

              <div className={styles["step-card"]}>
                <span className={styles["step-number"]}>3</span>
                <h3 className={styles["step-title"]}>Export &amp; Share</h3>
                <p className={styles["step-desc"]}>
                  Render your final high-resolution video or printable photo collage right in your
                  browser. Share directly to social stories, messages, or print keepsake albums.
                </p>
              </div>
            </div>

            {/* Architecture Privacy Callout Banner */}
            <div className={styles["privacy-banner"]}>
              <div className={styles["privacy-icon"]} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className={styles["privacy-content"]}>
                <h4 className={styles["privacy-title"]}>Why On-Device Processing Matters</h4>
                <p className={styles["privacy-desc"]}>
                  Personal memories and family media deserve privacy. Eventory is architected for
                  client-side processing so your photos and video clips remain on your device rather
                  than being stored on external cloud servers.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* ==========================================================================
            5. Creator & Community Introduction Section
            ========================================================================== */}
        <Section id="creators" spacing="lg" surface="default">
          <Container size="xl">
            <div className={styles["section-header"]}>
              <Badge variant="pink" size="sm">
                Community Ecosystem
              </Badge>
              <h2 className={styles["section-title"]}>Designed for Celebrants. Powered by Creators.</h2>
              <p className={styles["section-desc"]}>
                Eventory is more than a template browser. It bridges motion designers who author
                stunning templates with celebrants who want to commemorate meaningful events.
              </p>
            </div>

            <div className={styles["creators-grid"]}>
              {/* Celebrant Perspective */}
              <div className={styles["creator-card"]}>
                <Badge variant="indigo" size="sm">
                  For Celebrants &amp; Families
                </Badge>
                <h3 className={styles["creator-card-title"]}>Effortless Keepsakes in Minutes</h3>
                <p className={styles["creator-card-desc"]}>
                  No steep learning curves or expensive video editing suites. Pick a design that
                  resonates with your celebration, slot in your pictures, and walk away with a
                  polished, studio-quality memory.
                </p>
                <ul className={styles["creator-points"]}>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Instant visual previews with intuitive text slots</span>
                  </li>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Standardized formats ready for Instagram, TikTok, and WhatsApp</span>
                  </li>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Free personal use with on-device rendering speed</span>
                  </li>
                </ul>
              </div>

              {/* Creator Perspective */}
              <div className={styles["creator-card"]}>
                <Badge variant="pink" size="sm">
                  For Motion &amp; Graphic Designers
                </Badge>
                <h3 className={styles["creator-card-title"]}>Publish Reusable Creative Templates</h3>
                <p className={styles["creator-card-desc"]}>
                  Bring your motion design and layout sensibilities to a wider audience. Author
                  reusable templates with customizable text layers, video masks, and audio cues
                  for real-world celebrations.
                </p>
                <ul className={styles["creator-points"]}>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Author once, share with friends, family, and the community</span>
                  </li>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Consistent JSON schema for layouts, keyframes, and aspect ratios</span>
                  </li>
                  <li className={styles["creator-point"]}>
                    <svg className={styles["creator-point-icon"]} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Owner Studio &amp; Template Publisher tooling arriving in Phase 5</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* ==========================================================================
            6. Closing Call to Action Section
            ========================================================================== */}
        <Section spacing="lg" surface="subtle">
          <Container size="xl">
            <div className={styles["cta-banner"]}>
              <Badge variant="indigo" size="sm">
                Get Started Today
              </Badge>
              <h2 className={styles["cta-title"]}>Celebrate Your Next Milestone with Eventory</h2>
              <p className={styles["cta-desc"]}>
                Explore our catalog of photo collages and motion video templates. Select a design,
                drop in your media, and craft a keepsake that lasts.
              </p>
              <div className={styles["cta-actions"]}>
                <Button variant="primary" size="lg" onClick={scrollToExplore}>
                  Browse All Templates
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToHowItWorks}>
                  Explore How It Works
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Template Inspection Modal */}
      <TemplatePreviewModal
        template={inspectedTemplate}
        onClose={() => setInspectedTemplate(null)}
      />
    </div>
  );
}
