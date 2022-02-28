import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crew-picture',
  styleUrls: ['./crew-picture.component.css'],
  template:`
  <div>
    <img src="{{ picture }}" id="crew-picture">
  </div>
  `
})
export class CrewPictureComponent implements OnInit {

  @Input() picture: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.picture)
  }

}
