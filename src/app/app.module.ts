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
import { DouglasComponent } from './components/crew/douglas/douglas.component';
import { DouglasImgComponent } from './components/crew/douglas-img/douglas-img.component';
import { AnousComponent } from './components/crew/anous/anous.component';
import { AnousImgComponent } from './components/crew/anous-img/anous-img.component';
import { MarkComponent } from './components/crew/mark/mark.component';
import { MarkImgComponent } from './components/crew/mark-img/mark-img.component';
import { VictorComponent } from './components/crew/victor/victor.component';
import { VictorImgComponent } from './components/crew/victor-img/victor-img.component';
import { MoonComponent } from './components/destination/moon/moon.component';
import { MoonImgComponent } from './components/destination/moon-img/moon-img.component';
import { MarsImgComponent } from './components/destination/mars-img/mars-img.component';
import { EuropaComponent } from './components/destination/europa/europa.component';
import { EuropaImgComponent } from './components/destination/europa-img/europa-img.component';
import { TitanComponent } from './components/destination/titan/titan.component';
import { TitanImgComponent } from './components/destination/titan-img/titan-img.component';
import { MarsComponent } from './components/destination/mars/mars.component';
import { LaunchComponent } from './components/technology/launch/launch.component';
import { LaunchImgComponent } from './components/technology/launch-img/launch-img.component';
import { SpaceComponent } from './components/technology/space/space.component';
import { SpaceImgComponent } from './components/technology/space-img/space-img.component';
import { SpaceCapComponent } from './components/technology/space-cap/space-cap.component';
import { SpaceCapImgComponent } from './components/technology/space-cap-img/space-cap-img.component';





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
    DouglasComponent,
    DouglasImgComponent,
    AnousComponent,
    AnousImgComponent,
    MarkComponent,
    MarkImgComponent,
    VictorComponent,
    VictorImgComponent,
    MoonComponent,
    MoonImgComponent,
    MarsImgComponent,
    EuropaComponent,
    EuropaImgComponent,
    TitanComponent,
    TitanImgComponent,
    MarsComponent,
    LaunchComponent,
    LaunchImgComponent,
    SpaceComponent,
    SpaceImgComponent,
    SpaceCapComponent,
    SpaceCapImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
