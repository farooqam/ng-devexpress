import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Alias } from '../models';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AliasListComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

  private aliases$: Alias[];

  @Input() set aliases(value: Alias[]) {
    if (value) {
      console.log(JSON.stringify(value));
      this.aliases$ = value;
    }
  }

  get aliases(): Alias[] {
    return this.aliases$;
  }

  constructor() { }

  ngOnInit() {
  }

}
