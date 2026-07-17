"use client";

import { useState } from "react";
import { Hammer, Lock, ArrowRight } from "lucide-react";
import DevModal from "./DevModal";

export default function MaintenanceOverlay() {
  const [modalOpen, setModalOpen] = useState(false);

  const maintenanceMessage =
    process.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE ||
    "This website is currently under active development. Please contact the administrator or developer for access.";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        background: "linear-gradient(135deg, #FAF9F6 0%, #EAE8E0 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "520px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "24px",
          padding: "48px 40px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.01)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Animated Icon Container */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            boxShadow: "0 8px 16px rgba(59, 130, 246, 0.2)",
          }}
        >
          <Hammer size={32} color="#FFFFFF" />
        </div>

        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#1E293B",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Creative Space <br />
          <span style={{ color: "#3B82F6" }}>Under Construction</span>
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#64748B",
            marginBottom: "32px",
          }}
        >
          {maintenanceMessage}
        </p>

        {/* Action Button */}
        <a
          href="mailto:hello@noventra.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#1E293B",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(30, 41, 59, 0.15)",
          }}
        >
          Contact Developer <ArrowRight size={16} />
        </a>

        {/* Hidden Developer Access Trigger */}
        <div
          onClick={() => setModalOpen(true)}
          style={{
            marginTop: "48px",
            fontSize: "0.8rem",
            color: "#94A3B8",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            userSelect: "none",
          }}
        >
          <Lock size={12} />
          <span>Developer Gateway</span>
        </div>
      </div>

      <DevModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
