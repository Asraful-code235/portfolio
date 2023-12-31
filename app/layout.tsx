"use client";

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Container from "@/components/shared/Container";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const scriptUrls = [
      "/assets/scripts/core.jquery.js",
      "/assets/scripts/plugin.imagesloaded.pkgd.js",
      "/assets/scripts/plugin.in-viewport.js",
      "/assets/scripts/plugin.animate.js",
      "/assets/scripts/plugin.isotope.pkgd.min.js",
      "/assets/scripts/plugin.ScrollToPlugin.min.js",
      "/assets/scripts/plugin.SplitText.js",
      "/assets/scripts/plugin.TweenMax.min.js",
      "/assets/scripts/plugin.touchSwipe.min.js",
      "/assets/scripts/plugin.typed.min.js",
      "/assets/plugins/nevo-slider/nevo-slider.js",
      "/assets/plugins/nevo-lightbox/nevo-lightbox.js",
      "/assets/scripts/main.functions.js",
    ];

    const loadScript = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;

        script.onload = () => {
          resolve();
        };

        script.onerror = (error) => {
          reject(error);
        };

        document.body.appendChild(script);
      });
    };

    const loadScriptsSequentially = async () => {
      for (const url of scriptUrls) {
        try {
          await loadScript(url);
        } catch (error) {
          console.error("Failed to load script:", error);
        }
      }
    };

    loadScriptsSequentially();

    return () => {
      // Clean up: Remove loaded scripts
      scriptUrls.forEach((url) => {
        const scriptElement = document.querySelector(`script[src="${url}"]`);
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      });
    };
  }, []);
  return (
    <html lang="en">
      <Container>{children}</Container>
    </html>
  );
}
