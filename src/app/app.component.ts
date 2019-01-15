import {
  Component,
  OnInit,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public title = 'Homework!';
  public dataStream: Array<any> = [];

  constructor () {this.createData(1); }

  ngOnInit() {
  }

  createData(n: number) { // n = number of seconds;
    setInterval(() => {
      const date = new Date;
      this.dataStream.push({timestamp: date, value: this.getRandomInt(-10, 10)});
      if (this.dataStream.length > 10) {
        this.dataStream.splice(0, 1);
      }
    }, n * 1000);
    return this.dataStream;
  }

  getRandomInt(min: number, max: number) {
    const result = Math.random() * (max - min) + min;
    return Math.round(result * 100) / 100;
  }
}