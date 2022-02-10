import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrewComponent } from './components/crew/crew.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"destination", component:DestinationComponent},
  {path:"crew",component:CrewComponent},
  {path:"technology", component: TechnologyComponent},
  {path:"404", component:NotFoundComponent},
  {path:"*", redirectTo:"/404", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
