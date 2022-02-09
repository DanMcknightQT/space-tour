import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-crew-nav',
  templateUrl: './crew-nav.component.html',
  styleUrls: ['./crew-nav.component.css']
})
export class CrewNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() outputData = new EventEmitter<object>()

  getData(crew: string){
    let data = null

    switch(crew){
      case 'Douglas Hurley':
        data = crewData[0]
        console.log(data)
        break;
      case 'Mark Shuttleworth':
        data = crewData[1]
        console.log(data)
        break;
      case 'Victor Glover':
        data = crewData[2]
        console.log(data)
        break;
      case 'Anousheh Ansari':
        data = crewData[3]
        console.log(data)
        break;
      default:
        data = crewData[0]
    }
    this.outputData.emit(data)
  }

}
