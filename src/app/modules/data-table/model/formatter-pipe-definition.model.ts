import { PipeTransform } from '@angular/core';

export class FormatterPipeDefinition {
  pipe: PipeTransform;
  format: string;
  start: number;
  end: number;

  /**
   *  Formats cell input value
   * @param pipe PipeTransform implementation
   * @param format format for DatePipe
   * @param start start for SlicePipe
   * @param end end for SlicePipe
   */
  constructor(pipe: PipeTransform, format?: string, start?: number, end?: number) {
    this.pipe = pipe;
    this.format = format;
    this.start = start;
    this.end = end;
  }
}
