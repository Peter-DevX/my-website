"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimations = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector("main");
    if (!root) return;

    const context = gsap.context(() => {
      const hero = root.querySelector("[data-scroll-hero]");
      if (hero) {
        gsap.fromTo(
          hero.querySelectorAll("[data-hero-item]"),
          { autoAlpha: 0, y: 36, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: hero, start: "top 80%", once: true },
          }
        );
      }

      root.querySelectorAll("[data-scroll-reveal]").forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: target, start: "top 86%", once: true },
          }
        );
      });

      root.querySelectorAll(".js-scroll-stagger").forEach((group) => {
        const items = Array.from(group.children);
        if (items.length === 0) return;

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 42, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 82%", once: true },
          }
        );
      });

      const heroSection = root.querySelector("[data-hero-section]");
      const heroBackground = heroSection?.querySelector("[data-hero-parallax]");
      if (heroSection && heroBackground) {
        gsap.to(heroBackground, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }, root);

    return () => context.revert();
  }, []);

  return null;
};

export default ScrollAnimations;