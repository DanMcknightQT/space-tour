import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NoPageComponent } from './components/no-page/no-page.component';


const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch: "full"},
  {path:'home', component: HomeComponent },
  {path: 'destination', component: DestinationComponent },
  {path: 'crew', component: CrewComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: '404', component: NoPageComponent},
  {path: '**', redirectTo: '/404'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
