import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.sass']
})
export class TemperatureComponent implements OnInit {
  currentTemperature: number = 30;
  lastTempRead = Date.now();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<{message: string, temperatures: number}>('http://localhost:3000/temperature/').subscribe((p) => {
      console.log(p);
      this.currentTemperature = p.temperatures;
    }, e => {
      console.warn('An error happened: ', e);
    });
  }

}
