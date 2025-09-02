import { useEffect } from "react";

async function registerSW(scriptUrl: string) {
  if (!("serviceWorker" in navigator)) {
    console.error("Service worker not supported on your browser");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(scriptUrl);
    if (registration.waiting) {
      registration.waiting.postMessage({ action: "skipWaiting" });
    }

    registration.addEventListener("updatefound", () => {
      const newSW = registration.installing;
      if (!newSW) return;

      newSW.onstatechange = () => {
        if (newSW.state === "installed") {
          if (navigator.serviceWorker.controller) {
            newSW.postMessage({ action: "skipWaiting" });
          }
        }
      };
    });

    setInterval(() => {
      console.log("Checking new version...");
      registration.update();
    }, 3000);

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
  }
}

export default function useSW(
  scriptUrl = process.env.NODE_ENV === "production" ? "/sw_prod.js" : "/sw.js",
) {
  useEffect(() => {
    void registerSW(scriptUrl);
  }, [scriptUrl]);
}
