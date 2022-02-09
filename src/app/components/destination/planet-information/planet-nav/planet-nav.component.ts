import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { destinationsData } from 'src/main';

@Component({
  selector: 'app-planet-nav',
  templateUrl: './planet-nav.component.html',
  styleUrls: ['./planet-nav.component.css']
})
export class PlanetNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() outputData = new EventEmitter<object>();

  getData(planet: string){
    let data = null

    switch(planet){
      case 'moon':
        data = destinationsData[0]
        //?console.log(data);
        break;
      case 'mars':
        data = destinationsData[1]
        //?console.log(data);
        break;
      case 'europa':
        data = destinationsData[2]
        //?console.log(data);
        break;  
      case 'titan':
        data = destinationsData[3]
        //?console.log(data);
        break;
      default:
        data = destinationsData[0]
    }
    this.outputData.emit(data)
  }
}
