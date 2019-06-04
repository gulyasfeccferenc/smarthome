import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as Chart from 'chart.js';
import {MysqlDatePipePipe} from '../../utils/mysql-date-pipe.pipe';

@Component({
  selector: 'app-temperature-history',
  templateUrl: './temperature-history.component.html',
  styleUrls: ['./temperature-history.component.sass']
})
export class TemperatureHistoryComponent implements OnInit {
  tempHistory: {id: string, createdAt: number, updatedat: number, temperature: number}[] = [
    {id: '1', createdAt: 2019060219081201, updatedat: 2019060219081201, temperature: 28},
    {id: '1', createdAt: 2019060219091201, updatedat: 2019060219081201, temperature: 29},
    {id: '1', createdAt: 2019060219101201, updatedat: 2019060219081201, temperature: 30},
    {id: '1', createdAt: 2019060219111201, updatedat: 2019060219081201, temperature: 31},
    {id: '1', createdAt: 2019060219121201, updatedat: 2019060219081201, temperature: 32}
  ];
  myChart;
  ctx;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.ctx = document.getElementById('myChart');
    this.httpClient.get<{message: string, temperatures: {id: string, createdAt: number, updatedat: number, temperature: number}[]}>
    ('http://localhost:3000/temperature/last10')
      .subscribe((p) => {
      console.log(p);
      this.tempHistory = p.temperatures;
      console.warn(this.tempHistory);
      this.refreshChart();
    }, e => {
      console.warn('An error happened: ', e);
    });
    this.refreshChart();
  }

  refreshChart() {
    var labelsArg = [];
    var dataArg = [];
    this.tempHistory.forEach(value => labelsArg.push(value.createdAt));
    this.tempHistory.forEach(value => dataArg.push(value.temperature));
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labelsArg,
        datasets: [{
          label: '# of Votes',
          data: dataArg,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
