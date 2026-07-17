"use client";

import { useState, useEffect } from "react";
import { X, Lock, ShieldAlert } from "lucide-react";

interface DevModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevModal({ isOpen, onClose }: DevModalProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setPasscode("");
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "noventra2026";

    // Simulate small verification network lag for UX feel
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (passcode.toLowerCase() === adminPassword.toLowerCase()) {
      localStorage.setItem("noventra_site_bypass", "true");
      setLoading(false);
      onClose();
      window.location.reload();
    } else {
      setError("Invalid developer passcode. Access denied.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(15, 23, 42, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "linear-gradient(135deg, #FFFFFF 0%, #FAF9F6 100%)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
          borderRadius: "20px",
          padding: "36px 30px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94A3B8",
            padding: "4px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#F1F5F9";
            e.currentTarget.style.color = "#475569";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#94A3B8";
          }}
        >
          <X size={16} />
        </button>

        {/* Lock Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(59, 130, 246, 0.1)",
              color: "#3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lock size={16} />
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1E293B", margin: 0 }}>
              Developer Gateway
            </h3>
            <p style={{ fontSize: "0.75rem", color: "#64748B", margin: "2px 0 0 0" }}>
              Enter passcode to bypass maintenance mode
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Input field */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Enter developer password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: error ? "1px solid #EF4444" : "1px solid #E2E8F0",
                background: "#FFFFFF",
                color: "#1E293B",
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = "#3B82F6";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
              autoFocus
            />
          </div>

          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#EF4444",
                fontSize: "0.8rem",
                marginBottom: "20px",
                background: "rgba(239, 68, 68, 0.05)",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(239, 68, 68, 0.1)",
              }}
            >
              <ShieldAlert size={14} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              style={{
                flex: 1,
                padding: "12px",
                background: "transparent",
                border: "1px solid #E2E8F0",
                color: "#64748B",
                borderRadius: "10px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#F8FAFC";
                e.currentTarget.style.color = "#475569";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#64748B";
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                flex: 1,
                padding: "12px",
                background: "#3B82F6",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "10px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
                transition: "background-color 0.2s, transform 0.1s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            >
              {loading ? "Verifying..." : "Access Site"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
