import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { Artist } from './models/artist.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  artist: Artist | null = null;

  constructor(private spotifyService: SpotifyService) { }

  getArtist() {
    this.spotifyService.getArtist('1Xyo4u8uXC1ZmMpatF05PJ?si=4YsyqwSEQx-lI4O4aVfNuQ').subscribe((response) => this.artist = response);
  }
}
