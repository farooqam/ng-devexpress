import { Component, OnInit } from '@angular/core';
import { FilterEditorService } from './filter-editor.service';

let anyOfOperation = {
  name: "anyof",
  caption: "Is any of",
  icon: "check",
  editorTemplate: "tagBoxTemplate",
  calculateFilterExpression(filterValue: any, field: any) {
    return filterValue && filterValue.length
      && Array.prototype.concat.apply([], filterValue.map(function (value) {
        return [[field.dataField, "=", value], "or"];
      })).slice(0, -1);
  }
};

@Component({
  selector: 'app-filter-editor',
  templateUrl: './filter-editor.component.html',
  styleUrls: ['./filter-editor.component.css']
})
export class FilterEditorComponent implements OnInit {

  filterText: any;
  dataSourceText: any;
  fields: Array<any>;
  customOperations: Array<any>;
  filter: any;
  categories: string[];
  groupOperations: string[] = ["and", "or"];


  constructor(service: FilterEditorService) {
    this.fields = service.getFields();
    this.filter = service.getFilter();
    this.categories = service.getCategories();
    this.customOperations = [anyOfOperation];
  }

  updateTexts(e) {
    this.filterText = FilterEditorComponent.formatValue(e.component.option("value"));
    this.dataSourceText = FilterEditorComponent.formatValue(e.component.getFilterExpression());
  }

  private static formatValue(value, spaces = 0) {
    if (value && Array.isArray(value[0])) {
      var TAB_SIZE = 4;
      spaces = spaces || TAB_SIZE;
      return "[" + FilterEditorComponent.getLineBreak(spaces) + value.map(function (item) {
        return Array.isArray(item[0]) ? FilterEditorComponent.formatValue(item, spaces + TAB_SIZE) : JSON.stringify(item);
      }).join("," + FilterEditorComponent.getLineBreak(spaces)) + FilterEditorComponent.getLineBreak(spaces - TAB_SIZE) + "]";
    }
    return JSON.stringify(value);
  }

  private static getLineBreak(spaces) {
    return "\r\n" + new Array(spaces + 1).join(" ");
  }


  ngOnInit() {
  }

}
