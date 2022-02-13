import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: 
    ['./home.component.css',
    '../../app.component.css'
    ],
  providers: [InfoService]
})



export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
