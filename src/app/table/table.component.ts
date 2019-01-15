import { Component,  OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any;
  public procent: any;
  public icon: any;
  constructor() { }

  calculateProcent(i: number) {
    const up = 'arrow_upward';
    const down = 'arrow_downward';
    const equal = 'more_horiz';
    if (i > 0) {
     return this.procent = Math.floor(this.data[i].value * 100 / this.data[i - 1].value);
    }
    if (this.procent > 10) {
      return up;
    } else if ( this.procent < 10 ) {
      return down;
    } else {
      return equal;
    }

  }

}
