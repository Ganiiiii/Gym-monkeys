import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.defaultPostLoginPath,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 - Page not found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
