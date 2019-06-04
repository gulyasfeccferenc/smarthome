import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TemperatureComponent } from './weather/temperature/temperature.component';
import {HttpClientModule} from '@angular/common/http';
import { TemperatureHistoryComponent } from './weather/temperature-history/temperature-history.component';
import { MysqlDatePipePipe } from './utils/mysql-date-pipe.pipe';
import { HumidityComponent } from './weather/humidity/humidity.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    TemperatureHistoryComponent,
    MysqlDatePipePipe,
    HumidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
