"use client";

import { useEffect, useState } from "react";

/**
 * Returns `false` during SSR and the initial hydration render,
 * then `true` once the component has mounted on the client.
 * Use to defer rendering UI that depends on client-only state
 * (e.g. theme) and avoid hydration mismatches.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return mounted;
}
