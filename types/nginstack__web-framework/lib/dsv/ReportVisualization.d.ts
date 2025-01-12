export = ReportVisualization;
declare function ReportVisualization(definition: any): void;
declare class ReportVisualization {
    constructor(definition: any);
    definition: any;
    referenceColumnMap_: any;
    unsolicitedColumns_: Record<any, boolean>;
    COLUMN_VALUE_PREFIX: string;
    columns: ReportVisualizationColumns;
    private simpleLayoutExporter_;
    dataSourceQuery: Record<any, any> | number;
    dataSourceQueryKey: number;
    footerComplement: string | null;
    groupExpansionLevel: number | null;
    headerComplement: string;
    private lastUsedFilterValues_;
    private layoutFilters_;
    orderBy: string | null;
    private pivotDefs_;
    rankingColumnLabel: string;
    private reportAssignMap_;
    showDateTime: boolean;
    showEnterpriseName: boolean;
    showFooter: boolean;
    showHeader: boolean;
    showOnlyFilledVariables: boolean;
    showPath: boolean;
    showRankingColumn: boolean;
    showUserAndDataBaseName: boolean;
    showVariables: boolean;
    totalLabel: string;
    private pivotGeneratedLabels_;
    private createDSQColumnMap_;
    getExportableData(): Array<{
        formats: Array<{
            name: string;
            processKey: number;
        }>;
        getExporter: () => any;
        getRawDataExporter: () => any;
        title: string;
    }>;
    private prepareLayoutFilters_;
    private getGroupValues_;
    render(outputObj: any): void;
    private createParamsToExpression_;
    private getBaseFromPivotAggregatedColumn_;
    private getColumnsFromDataSet_;
    protected initPivots_(): void;
    private fillPivotDefinitions_;
    private getTotalWeightColumn_;
    protected getPivotDataSet_(): any;
    private defineWeightedAverage_;
    getColumn(name: string): ReportVisualizationColumn;
    private getDataExporter_;
    private getColumnDefs_;
    private getRawDataExporter_;
    private initColumns_;
    private initProperties_;
    private ds_;
    queryData(filterValues: Record<string, any>): void;
}
declare namespace ReportVisualization {
    export { exportFormats_, registerExportFormat, Process, SimpleLayoutExporter, DataSet };
}
import ReportVisualizationColumns = require('./ReportVisualizationColumns.js');
import ReportVisualizationColumn = require('./ReportVisualizationColumn.js');
declare var exportFormats_: {
    [x: string]: number;
};
declare function registerExportFormat(name: string, processKey: number): void;
declare var Process: any;
type SimpleLayoutExporter = import('../simple-layout/SimpleLayoutExporter');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
