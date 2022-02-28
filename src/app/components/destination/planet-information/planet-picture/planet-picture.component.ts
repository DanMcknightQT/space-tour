import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-picture',
  styleUrls: ['./planet-picture.component.css'],
  template:`

  <img src="{{ picture }}" id="planet-picture">
  
  `
})
export class PlanetPictureComponent implements OnInit {

  @Input() picture: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.picture)
  }

}
