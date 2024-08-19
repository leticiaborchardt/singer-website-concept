import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalStyleService } from '../../services/global-style.service';
import { LatestAlbumComponent } from '../../components/latest-album/latest-album.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [LatestAlbumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private globalStyleService: GlobalStyleService) { }

  ngOnInit() {
    this.globalStyleService.setBackgroundImage('/assets/images/home-bg.png');
  }

  ngOnDestroy() {
    this.globalStyleService.removeBackgroundImage();
  }
}