"use client";
import { useEffect } from "react";

export default function MyApp({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return <>{children}</>;
}