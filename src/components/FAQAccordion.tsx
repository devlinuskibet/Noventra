"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="accordion" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}
            role="listitem"
          >
            <button
              className="accordion__trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
            >
              <span>{item.question}</span>
              <ChevronDown size={20} />
            </button>
            <div
              className="accordion__content"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
            >
              <div className="accordion__body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
