import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = "https://api.spotify.com/v1";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/artists/${id}`, { headers: this.authService.getHeaders() });
  }
}
