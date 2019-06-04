import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-temperature-history',
  templateUrl: './temperature-history.component.html',
  styleUrls: ['./temperature-history.component.sass']
})
export class TemperatureHistoryComponent implements OnInit {
  tempHistory: {id: string, createdAt: number, updatedat: number, temperature: number}[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<{message: string, temperatures: {id: string, createdAt: number, updatedat: number, temperature: number}[]}>('http://localhost:3000/temperature/last10')
      .subscribe((p) => {
      console.log(p);
      this.tempHistory = p.temperatures;
      console.warn(this.tempHistory);
    }, e => {
      console.warn('An error happened: ', e);
    });
  }

}
