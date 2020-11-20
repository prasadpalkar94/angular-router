import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  {path:'crisis-center',component:CrisisListComponent},
  {path:'heroes',component:HeroListComponent},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,
      {
      enableTracing : true
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
