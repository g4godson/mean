import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

import { ReviewComponent } from './review/review.component';
import { NewreviewComponent } from './newreview/newreview.component';
const routes: Routes = [

    { path : 'movies', component: HomeComponent, children:[
        { path : ':id/review', component: NewreviewComponent }

    ] },
    { path : 'movies/new', component: CreateComponent},


    { path : 'movies/:id', component: ReviewComponent},
    // { path : 'movies/:id/review', component: NewreviewComponent},
    { path: '', pathMatch: 'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
