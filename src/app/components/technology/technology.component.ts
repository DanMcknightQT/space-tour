import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  displayTech = "Launch vehicle"  
	handleTechSelect(tech: string){
	  this.displayTech = tech  
	}

  constructor() { }

  ngOnInit(): void {
  }

}
