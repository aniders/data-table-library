import { Component, Input } from '@angular/core';
import { DatePipe, SlicePipe } from '@angular/common';
import { FormatterPipeDefinition } from '../model/formatter-pipe-definition.model';
import { DataTableColumnType } from '../model/data-table-column-type.enum';

@Component({
  selector: 'app-data-table-text-cell',
  templateUrl: 'text-cell.component.html',
  styleUrls: ['./text-cell.component.scss'],
})
export class TextCellComponent {
  @Input() value: string;
  @Input() formatter: FormatterPipeDefinition;
  @Input() type: DataTableColumnType;

  /**
   * Format the input based on Column type and formatter definition.
   */
  getFormattedInput(): string {
    if (null != this.formatter && null != this.value) {
      if (this.formatter.pipe instanceof DatePipe) {
        return this.formatter.pipe.transform(this.value, this.formatter.format);
      } else if (this.formatter.pipe instanceof SlicePipe) {
        return this.formatter.pipe.transform(this.value, this.formatter.start, this.formatter.end);
      }
    } else {
      return this.value;
    }
  }
}
