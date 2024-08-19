import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'The Weeknd | Home'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'The Weeknd | About',

    },
    {
        path: 'albums',
        component: AlbumsComponent,
        title: 'The Weeknd | Albums'
    }
];
