import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PlanetInformationComponent } from './components/destination/planet-information/planet-information.component';
import { PlanetNavComponent } from './components/destination/planet-information/planet-nav/planet-nav.component';
import { PlanetPictureComponent } from './components/destination/planet-information/planet-picture/planet-picture.component';
import { CrewInformationComponent } from './components/crew/crew-information/crew-information.component';
import { CrewPictureComponent } from './components/crew/crew-information/crew-picture/crew-picture.component';
import { CrewNavComponent } from './components/crew/crew-information/crew-nav/crew-nav.component';
import { TechInformationComponent } from './components/technology/tech-information/tech-information.component';
import { TechNavComponent } from './components/technology/tech-information/tech-nav/tech-nav.component';
import { TechPictureComponent } from './components/technology/tech-information/tech-picture/tech-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    PlanetInformationComponent,
    PlanetNavComponent,
    PlanetPictureComponent,
    CrewInformationComponent,
    CrewPictureComponent,
    CrewNavComponent,
    TechInformationComponent,
    TechNavComponent,
    TechPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
