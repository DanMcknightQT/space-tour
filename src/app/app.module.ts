import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SubHeadingBarComponent } from './components/sub-heading-bar/sub-heading-bar.component';
import { PlanetNameComponent } from './components/planet-name/planet-name.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NoPageComponent } from './components/no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SubHeadingBarComponent,
    PlanetNameComponent,
    PlanetInfoComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
