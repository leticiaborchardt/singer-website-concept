import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyEnviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');

    if (!token) {
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(SpotifyEnviroment.clientId + ':' + SpotifyEnviroment.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      this.http.post<any>(
        SpotifyEnviroment.tokenEndpoint,
        'grant_type=client_credentials',
        { headers }
      ).subscribe(response => {
        localStorage.setItem('token', response.access_token);
        return response.access_token;
      });
    }

    return token;
  }
}
