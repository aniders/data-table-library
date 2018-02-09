import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, TransactionDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export interface TableDataSource extends DataSource<any> {
    filteredData: any[];
    renderedData: any[];
    filter: string;

    setDataTableAttributes(_paginator: MatPaginator, _sort: MatSort);
}

