import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    
  },
  { path: 'main', component: MainPageComponent },
  { path: 'episodes', component: EpisodePageComponent },
  { path: 'members', component: MembersPageComponent },
  { path: 'merch', component: MerchPageComponent },
  { path: '**', component: ErrorPageComponent }
];
@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
