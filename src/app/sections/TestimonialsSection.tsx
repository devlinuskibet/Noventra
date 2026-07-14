"use client";

import TestimonialCarousel from "@/components/TestimonialCarousel";
import { type Testimonial } from "@/data/testimonials";
import styles from "../page.module.css";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className={`section section--dark ${styles.testimonialsSection}`}>
      <div className="container">
        <div className={`${styles.sectionHeader} text-center`}>
          <span className="eyebrow">What our clients say</span>
          <h2 className="section-title">Trusted by organizations across sectors</h2>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
