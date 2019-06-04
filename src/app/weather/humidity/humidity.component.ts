import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.sass']
})
export class HumidityComponent implements OnInit {
  currentHumidity: number = 30;
  lastTempRead = Date.now();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<{message: string, humidity: any}>('http://localhost:3000/humidity/').subscribe((p) => {
      console.log(p);
      this.currentHumidity = p.humidity;

    }, e => {
      console.warn('An error happened: ', e);
    });
  }
}
