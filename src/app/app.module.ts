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
import { PickYourDestinationCardComponent } from './components/pick-your-destination-card/pick-your-destination-card.component';
import { MeetYourCrewCardComponent } from './components/meet-your-crew-card/meet-your-crew-card.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NoPageComponent,
    NavbarComponent,
    PickYourDestinationCardComponent,
    MeetYourCrewCardComponent,
    TechnologyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
