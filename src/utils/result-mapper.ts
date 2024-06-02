// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { Result } from '../types/result';

export class ResultMapper {
  data: Result;

  constructor(json: Result) {
    this.data = json;
  }

  static fromJSON(json: Result): ResultMapper {
    return new ResultMapper({
      title: json.title,
      description: json.description,
      id: json.id,
      isCodeRedemptionOnly: json.isCodeRedemptionOnly,
      namespace: json.namespace,
      keyImages: json.keyImages,
      price: json.price,
      offerMappings: json.offerMappings,
      productSlug: json.productSlug
    });
  }
}
