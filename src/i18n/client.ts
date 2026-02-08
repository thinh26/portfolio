"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FlatNamespace, KeyPrefix } from "i18next";
import i18next from "./i18next";
import {
  useTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from "react-i18next";

const runsOnServerSide = typeof window === "undefined";

type $Tuple<T> = readonly [T?, ...T[]];

export function useT<
  Ns extends FlatNamespace | $Tuple<FlatNamespace>,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const lng = useParams()?.lng;
  if (typeof lng !== "string")
    throw new Error("useT is only available inside /app/[lng]");

  if (i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng);
  }

  return useTranslation(ns, options);
}
