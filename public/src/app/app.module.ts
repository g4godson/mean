import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';

import { HomeComponent } from './home/home.component';

//extra
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { ReviewComponent } from './review/review.component';
import { NewreviewComponent } from './newreview/newreview.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,

    HomeComponent,

    ReviewComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
