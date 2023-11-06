import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  readonly #http = inject(HttpClient);

  readonly #pexelsUrl = 'https://api.pexels.com/v1';
  readonly #pexelsApiKey =
    'xaioCltDDfTYuh7ObgyvS3V4lH1xAatbQdWBWYXGJUXMlxZO9boofjot';

  searchPhotos(query: string): Observable<any> {
    const headers = {
      Authorization: `${this.#pexelsApiKey}`,
    };

    const params = {
      query: query,
    };

    return this.#http
      .get(`${this.#pexelsUrl}/search`, { headers, params })
      .pipe(map((res: any) => res.photos));
  }
}
