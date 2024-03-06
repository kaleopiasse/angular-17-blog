import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Anime, TopAnimesResponse } from '../types/animes.types';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private readonly  _httpClient: HttpClient) { }

  getTopAnimes(): Observable<TopAnimesResponse>  {
    return this._httpClient.get(`${environment.apiJikanUrl}` + 'top/anime') as Observable<TopAnimesResponse>;
  }

  getAnime(id: number): Observable<{ data: Anime }> {
    return this._httpClient.get(`${environment.apiJikanUrl}anime/${id}` ) as Observable<{ data: Anime }>;
  }
}
