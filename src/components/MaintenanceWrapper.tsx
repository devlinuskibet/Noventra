"use client";

import { useEffect, useState } from "react";
import MaintenanceOverlay from "./MaintenanceOverlay";

export default function MaintenanceWrapper({ children }: { children: React.ReactNode }) {
  const [isLocked, setIsLocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const siteDisabled = process.env.NEXT_PUBLIC_SITE_DISABLED === "true";
    const bypass = localStorage.getItem("noventra_site_bypass") === "true";

    if (siteDisabled && !bypass) {
      setIsLocked(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div style={{ minHeight: "100vh", background: "#FAF9F6" }} />;
  }

  if (isLocked) {
    return <MaintenanceOverlay />;
  }

  return <>{children}</>;
}
