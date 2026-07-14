"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { type Testimonial } from "@/data/testimonials";
import styles from "./TestimonialCarousel.module.css";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length);
  }, [currentIndex, testimonials.length, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [currentIndex, testimonials.length, goTo]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[currentIndex];

  return (
    <div className={styles.carousel} aria-label="Client testimonials">
      <div className={`${styles.content} ${isTransitioning ? styles.transitioning : ""}`}>
        <div className={styles.quoteIcon}>
          <Quote size={40} />
        </div>
        <blockquote className={styles.quote}>
          {current.quote}
        </blockquote>
        <div className={styles.author}>
          <div className={styles.authorAvatar}>
            {current.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className={styles.authorName}>{current.name}</div>
            <div className={styles.authorTitle}>
              {current.title}, {current.company}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navButton}
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
