import { Component,  OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any;
  public procent: any;
  public numberOfVal: any = -10;
  constructor() { }

  calculateProcent(i: number) {
    if (i > 0) {
      this.procent = Math.round(((this.data[i - 1].value - this.data[i].value) / this.data[i].value) * 100 );
    }

    if (this.procent > 10) { // The value increased by >10%
      return 'arrow_upward';
    } else if (this.procent < -10) { // The value decreased by >10%
      return 'arrow_downward';
    } else if (this.procent > 0 && this.procent < 10) { // The value increased by <10%
      return 'arrow_forward';
    } else if (this.procent < 0 && this.procent > -10) { // The value decreased by <10%
      return 'arrow_back_ios';
    } else {
      return 'drag_handle';
    }
  }

  setNumberOfVal(event) { return  this.numberOfVal = -event.target.value; }


}
