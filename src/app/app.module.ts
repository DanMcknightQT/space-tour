import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';
import { DestinationImgComponent } from './components/destination-img/destination-img.component';
import { DestinationInfoComponent } from './components/destination-info/destination-info.component';
import { DestinationNavComponent } from './components/destination-nav/destination-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    HomeInfoComponent,
    HomeBtnComponent,
    DestinationImgComponent,
    DestinationInfoComponent,
    DestinationNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
