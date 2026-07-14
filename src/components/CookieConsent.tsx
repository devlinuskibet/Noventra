"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("noventra-cookie-consent");
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("noventra-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("noventra-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="alert" aria-live="polite">
      <div className="cookie-banner__text" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Cookie size={20} style={{ flexShrink: 0, color: "var(--color-accent)" }} />
        <span>
          We use cookies to improve your experience and analyze site usage.
          By continuing to use this site, you agree to our{" "}
          <a href="/legal/cookies" style={{ textDecoration: "underline" }}>Cookie Policy</a>.
        </span>
      </div>
      <div className="cookie-banner__actions">
        <button className="btn btn--ghost btn--small" onClick={decline}>
          Decline
        </button>
        <button className="btn btn--primary btn--small" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
