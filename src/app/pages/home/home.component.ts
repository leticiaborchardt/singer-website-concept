import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalStyleService } from '../../services/global-style.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
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