import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomedetailsComponent } from './components/homedetails/homedetails.component';
import { ExplorebuttonComponent } from './components/explorebutton/explorebutton.component';
import { MoonComponent } from './components/destinations/moon/moon.component';
import { MarsComponent } from './components/destinations/mars/mars.component';
import { EuropaComponent } from './components/destinations/europa/europa.component';
import { TitanComponent } from './components/destinations/titan/titan.component';
import { DouglashurleyComponent } from './components/crew/douglashurley/douglashurley.component';
import { MarkshuttleworthComponent } from './components/crew/markshuttleworth/markshuttleworth.component';
import { VictorgloverComponent } from './components/crew/victorglover/victorglover.component';
import { AnoushehansariComponent } from './components/crew/anoushehansari/anoushehansari.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationsComponent,
    CrewComponent,
    TechnologyComponent,
    NavbarComponent,
    NotfoundComponent,
    HomedetailsComponent,
    ExplorebuttonComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    DouglashurleyComponent,
    MarkshuttleworthComponent,
    VictorgloverComponent,
    AnoushehansariComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
