import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreBtnComponent } from './components/buttons/explore-btn/explore-btn.component';
import { SliderBtnComponent } from './components/buttons/slider-btn/slider-btn.component';
import { TabsComponent } from './components/buttons/tabs/tabs.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NoPageComponent,
    NavbarComponent,
    ExploreBtnComponent,
    SliderBtnComponent,
    TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
