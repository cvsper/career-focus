"use client";

import { driver, type DriveStep } from "driver.js";
import "driver.js/dist/driver.css";

const TOUR_VERSION = "v1";
const TOUR_KEY = `cf-marketing-tour-${TOUR_VERSION}`;

const steps: DriveStep[] = [
  {
    popover: {
      title: "👋 Welcome to Career Focus",
      description: "30-second tour of what we do. We'll show you where to find what you need.",
    },
  },
  {
    element: '[data-tour="nav-about"]',
    popover: {
      title: "ℹ️ About",
      description: "Our story — 501(c)(3) nonprofit serving Florida since 2013. Our mission, team, and impact.",
    },
  },
  {
    element: '[data-tour="nav-services"]',
    popover: {
      title: "🎯 Services",
      description: "Two paths: <strong>Adult Services</strong> for employment & vocational support, <strong>Youth Services</strong> for career development.",
    },
  },
  {
    element: '[data-tour="nav-partners"]',
    popover: {
      title: "🤝 Community Partners",
      description: "Employers, funders, and agencies we work with across Tampa and Central Florida.",
    },
  },
  {
    element: '[data-tour="nav-join"]',
    popover: {
      title: "🌟 Join Us",
      description: "Volunteer, donate, or partner with us. Every role helps people find meaningful work.",
    },
  },
  {
    element: '[data-tour="nav-contact"]',
    popover: {
      title: "📞 Contact",
      description: "Reach our Tampa HQ or Wesley Chapel office. Get started by calling or emailing us.",
    },
  },
  {
    element: '[data-tour="nav-cta"]',
    popover: {
      title: "🚀 Ready to begin?",
      description: "Click <strong>Get Started</strong> to connect with our team. We'll match you to the right program.",
    },
  },
  {
    popover: {
      title: "🎉 That's the whole site",
      description: "Click the <strong>?</strong> in the nav anytime to see this tour again.",
    },
  },
];

export function startTour(force = false) {
  if (typeof window === "undefined") return;
  if (!force && localStorage.getItem(TOUR_KEY)) return;

  const d = driver({
    showProgress: true,
    allowClose: true,
    overlayOpacity: 0.6,
    stagePadding: 6,
    stageRadius: 8,
    smoothScroll: true,
    nextBtnText: "Next →",
    prevBtnText: "← Back",
    doneBtnText: "Got it",
    steps,
    onDestroyed: () => {
      localStorage.setItem(TOUR_KEY, Date.now().toString());
    },
  });

  d.drive();
}
