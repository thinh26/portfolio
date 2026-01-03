"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FlatNamespace, KeyPrefix } from "i18next";
import i18next from "./i18next";
import {
  useTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from "react-i18next";

type $Tuple<T> = readonly [T?, ...T[]];

export function useT<
  Ns extends FlatNamespace | $Tuple<FlatNamespace>,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  return useTranslation(ns, options);
}
