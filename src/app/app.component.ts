import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit, OnDestroy  {
  public title = 'Homework!';
  public dataStream: Array<any> = [];
  @ViewChild('chart') public chartEl: ElementRef;
  private _chart: any;

  constructor () {
    this.createData(1);
  }

  createData(n: number) { // n = number of seconds;
    setInterval(() => {
      const date = (new Date).getTime();
      const value = this.getRandomInt(-10, 10);
      this.dataStream.push({timestamp: date, value: value});
      if (this.dataStream.length > 10) {
        this.dataStream.splice(0, 1);
      }
      if (this._chart) {
        this._chart['series'][0].addPoint([date, value], true, true);
      }
    }, n * 1000);
    return this.dataStream;
  }

  getRandomInt(min: number, max: number) {
    const result = Math.random() * (max - min) + min;
    return Math.round(result * 100) / 100;
  }


  public ngAfterViewInit() {
    const opts: any = {
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
        },
        rangeSelector: {
          buttons: [{
              count: 1,
              type: 'minute',
              text: '1M'
          }, {
              count: 5,
              type: 'minute',
              text: '5M'
          }, {
              type: 'all',
              text: 'All'
          }],
          inputEnabled: false,
          selected: 0
      },
        series: [{
          name: 'Live streaming data',
          data: (function () {
              let data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: Math.floor(Math.random() * 10) + 0
                  });
              }
              return data;
          }())
        }]
    };

    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'spline',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
