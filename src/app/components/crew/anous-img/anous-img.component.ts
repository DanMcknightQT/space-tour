import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-anous-img',
  templateUrl: './anous-img.component.html',
  styleUrls: ['./anous-img.component.css']
})
export class AnousImgComponent implements OnInit {

  crewMember = crewData[3]
  img = this.crewMember.images[0]

  constructor() { }

  ngOnInit(): void {
    console.log(this.img);
  }

}
