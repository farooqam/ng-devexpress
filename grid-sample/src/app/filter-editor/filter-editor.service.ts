import { Injectable } from '@angular/core';

export class Product {
  ID: number;
  Name: string;
  Price: number;
  CurrentInventory: number;
  Backorder: number;
  Manufacturing: number;
  Category: string;
  ImageSrc: string;
}

// tslint:disable-next-line:one-variable-per-declaration
const filter: Array<any> = [
  ['Category', 'anyof', ['Automation', 'Monitors']],
  'or',
  [
    ['Category', '=', 'Televisions'],
    'and',
    ['Price', 'between', [2000, 4000]]
  ]
],
  categories: string[] = [
    'Video Players',
    'Televisions',
    'Monitors',
    'Projectors',
    'Automation'
  ],
  fields: Array<any> = [{
    dataField: 'Name'
  }, {
    dataField: 'Price',
    dataType: 'number',
    format: 'currency'
  }, {
    dataField: 'Current_Inventory',
    dataType: 'number',
    caption: 'Inventory'
  }, {
    dataField: 'Category',
    filterOperations: ['=', 'anyof'],
    lookup: {
      dataSource: categories
    }
  }
  ];

@Injectable({
  providedIn: 'root'
})
export class FilterEditorService {

  getFields(): Array<any> {
    return fields;
}

getCategories(): string[] {
    return categories;
}

getFilter(): Array<any> {
    return filter;
}
}
