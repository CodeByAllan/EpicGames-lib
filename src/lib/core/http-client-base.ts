// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

export abstract class HttpClientBase<T> {
  abstract get(url: string): Promise<T>;
}
