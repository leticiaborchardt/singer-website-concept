import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';
import { Album, AlbumsResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = "https://api.spotify.com/v1";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArtistById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/artists/${id}`, { headers: this.authService.getHeaders() });
  }

  getAlbunsByArtistId(id: string): Observable<AlbumsResponse> {   
    return this.http.get<AlbumsResponse>(`${this.apiUrl}/artists/${id}/albums`, { headers: this.authService.getHeaders() });
  }

  getAlbumById(id: string): Observable<Album> {   
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`, { headers: this.authService.getHeaders() });
  }
}
