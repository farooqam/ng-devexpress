import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { Alias } from '../models';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AliasListComponent implements OnChanges {
  private aliases$: Alias[];

  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

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

  ngOnChanges(changes: SimpleChanges): void {
    const aliases: SimpleChange = changes.aliases;

    if (aliases.currentValue !== aliases.previousValue) {
      this.aliases = aliases.currentValue;

      if (this.grid) {
        setTimeout(() => this.grid.instance.updateDimensions(), 500);
      }
    }
   }
}
