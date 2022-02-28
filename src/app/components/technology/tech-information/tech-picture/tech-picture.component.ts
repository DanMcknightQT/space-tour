import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-picture',
  styleUrls: ['./tech-picture.component.css'],
  template:`
  <div>
    <img src="{{ picture }}" id="tech-picture">
  </div>
  `
})
export class TechPictureComponent implements OnInit {

  @Input() picture: any;
  constructor() { }

  ngOnInit(): void {
  }

}
