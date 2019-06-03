import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.sass']
})
export class TemperatureComponent implements OnInit {
  currentTemperature: number = 30;
  lastTempRead = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
