// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

type Price = {
  totalPrice: TotalPrice;
};
type TotalPrice = {
  discountPrice: number;
  originalPrice: number;
  voucherDiscount: number;
  discount: number;
  currencyCode: string;
  currencyInfo: CurrencyInfo;
  fmtPrice: FmtPrice;
};
type CurrencyInfo = {
  decimals: number;
};
type FmtPrice = {
  originalPrice: string;
  discountPrice: string;
  intermediatePrice: string;
};
type OfferMappings = {
  pageSlug: string;
  pageType: string;
};
export type Result = {
  title: string;
  id: string;
  isCodeRedemptionOnly: boolean;
  namespace: string;
  description: string;
  keyImages: Array<string>;
  price: Price;
  offerMappings: Array<OfferMappings>;
  productSlug: string;
};
