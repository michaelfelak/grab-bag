import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'photo-album', component: PhotoAlbumComponent },
  { path: 'profile', component: ProfileListComponent },
  { path: 'submit', component: SubmitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
