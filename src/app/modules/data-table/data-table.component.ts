import { Component, Input, ElementRef, AfterViewInit, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { TableDataSource } from './collection/table-data-source';
import { DataTableDefinition, DataTableColumnDefinition } from './model/data-table-definition.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit, AfterViewInit, OnChanges  {
  @Input() searchResultDefinition: DataTableDefinition;
  @Input() dataSource: TableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  header: string;

  ngOnInit() {
    this.dataSource.setDataTableAttributes(this.paginator, this.sort);
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
    this.ngAfterViewInit();
  }

  getSearchResultHeader(): string {
    this.header = 'Your search resulted in ' + this.dataSource.filteredData.length ;
    const searchName = ' ' + this.searchResultDefinition.type;
    return ((this.dataSource.filteredData.length === 1) ?  this.header +=  searchName : this.header += searchName + 's');
  }

  isNoResult(): boolean {
    return ((this.dataSource.renderedData.length === 0) ? true : false);
  }

  getNoResultText(): string {
    return 'No ' + this.searchResultDefinition.type + 's found matching filter';
  }

  getDataLength(): number {
    return this.dataSource.filteredData.length;
  }

  getDataTablepageSize(): number {
    return this.searchResultDefinition.pageSize;
  }

  getDataTablepageSizeOptions(): number[] {
    return this.searchResultDefinition.pageSizeOptions;
}

  getHeaders(): string[] {
    return this.searchResultDefinition.columns.map(definition => definition.header);
  }

  getColumns(): DataTableColumnDefinition[] {
    return this.searchResultDefinition.columns;
  }

  getDisplayedColumns(): string[] {
    return this.searchResultDefinition.columns.map(definition => definition.propertyName);
  }
}
