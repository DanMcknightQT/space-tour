import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "crew", component: CrewComponent},
  {path: "destination", component: DestinationComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "**", redirectTo: "/home", pathMatch: "full"}
];

//@LavishGent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
