// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { HttpClientBase } from '../core/http-client-base';

export class HttpClient<T> extends HttpClientBase<T> {
  private client: { get: (url: string) => Promise<T> };

  constructor(client: { get: (url: string) => Promise<T> }) {
    super();
    this.client = client;
  }

  async get(url: string): Promise<T> {
    try {
      const response: T = await this.client.get(url);
      return response;
    } catch (error) {
      throw new Error(`Failed to get request results: ${error}`);
    }
  }
}
