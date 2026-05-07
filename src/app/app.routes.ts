import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'about', component: About },
  { path: 'navbar', component: Navbar },
  { path: 'footer', component: Footer },
];
