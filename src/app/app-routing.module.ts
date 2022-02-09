import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "crew", component: CrewComponent},
  {path: "destinations", component: DestinationsComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "404", component: NotfoundComponent},
  {path: "**", redirectTo: "/404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//test