"use client";
import { PropsWithChildren } from "react";
import useSW from "@/hooks/useSW";

function ServiceWorker({ children }: PropsWithChildren) {
  useSW();
  return <>{children}</>;
}

export default ServiceWorker;
