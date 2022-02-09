import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { technologyData } from 'src/main';
@Component({
  selector: 'app-tech-nav',
  templateUrl: './tech-nav.component.html',
  styleUrls: ['./tech-nav.component.css']
})
export class TechNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() outputData = new EventEmitter<object>()

  getData(tech: string){
    let data = null

    switch(tech){
      case 'Launch vehicle':
        data = technologyData[0]
        console.log(data)
        break;
      case 'Spaceport':
        data = technologyData[1]
        console.log(data)
        break;
      case 'Space capsule':
        data = technologyData[2]
        console.log(data)
        break;
      default:
        data = technologyData[0]
    }
    this.outputData.emit(data)
  }
}
