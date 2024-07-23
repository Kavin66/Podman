import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  showTable = false;
  loading = false;
  weatherForecastDetails: any;

  constructor(private http: HttpClient) { }

  getWeatherForecast() {
    this.loading = true;
    this.http.get('http://localhost:10100/WeatherForecast').subscribe((data: any) => {
      this.weatherForecastDetails = data;
      this.loading = false;
      this.showTable = true;
    });
  }
}
