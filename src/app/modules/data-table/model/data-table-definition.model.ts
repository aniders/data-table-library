import { DataTableColumnType } from './data-table-column-type.enum';
import { FormatterPipeDefinition } from '../model/formatter-pipe-definition.model';

export class DataTableDefinition {
  type: string;
  columns: DataTableColumnDefinition[];
  pageSize: number;
  pageSizeOptions: number[];
}

export class DataTableColumnDefinition {
  header: string;
  propertyName: string;
  type: DataTableColumnType;
  formatter: FormatterPipeDefinition;

  constructor(header: string, propertyName: string, type: DataTableColumnType, formatter?: FormatterPipeDefinition ) {
    this.header = header;
    this.propertyName = propertyName;
    this.type = type;
    this.formatter = formatter;
  }
}
