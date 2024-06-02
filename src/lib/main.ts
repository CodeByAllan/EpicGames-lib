// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import axios, { AxiosResponse } from 'axios';
import { Result } from '../types/result';
import { Locale } from '../types/locale';
import { ResultMapper } from '../utils/result-mapper';
import { HttpClient } from './services/http-client';

const axiosInstance = axios.create({
  timeout: 5000
});
const http_client = new HttpClient<AxiosResponse>(axiosInstance);

export class EpicGames {
  private async get(url: string): Promise<Array<Result>> {
    try {
      const response = await http_client.get(url);
      return response.data.data.Catalog.searchStore.elements;
    } catch (error) {
      throw new Error(`Failed to fetch Epic Free Games: ${error}`);
    }
  }

  async FreeGames(locale: Locale): Promise<Array<ResultMapper>> {
    const API_BASE_URL: string =
      'https://store-site-backend-static-ipv4.ak.epicgames.com/';
    if (!locale.language || !locale.countryCode) {
      throw new Error('Invalid locale provided');
    }
    try {
      const response = await this.get(
        `${API_BASE_URL}freeGamesPromotions?locale=${locale.language}&country=${locale.countryCode}&allowCountries=${locale.countryCode}`
      );
      return response.reduce(
        (previousValue: Array<ResultMapper>, currentValue: Result) => {
          const resultMapper: ResultMapper =
            ResultMapper.fromJSON(currentValue);
          if (
            resultMapper.data.isCodeRedemptionOnly === true &&
            resultMapper.data.productSlug !== '[]'
          ) {
            previousValue.push(resultMapper);
          }
          return previousValue;
        },
        []
      );
    } catch (error) {
      throw new Error(`Failed to get request results: ${error}`);
    }
  }
}
