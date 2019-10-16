import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReactiveComponent,
    LoginComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'react',component:ReactiveComponent},
      {path:'login',component:LoginComponent},
      {path:'movie',component:MovieComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
