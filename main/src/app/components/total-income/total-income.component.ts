import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexPlotOptions,
    ApexResponsive,
    ApexGrid,
    ApexFill,
    ApexMarkers,
    ApexXAxis,
    ApexYAxis,
    NgApexchartsModule,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface totalincomeChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    responsive: ApexResponsive;
    grid: ApexGrid;
    fill: ApexFill;
    markers: ApexMarkers;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string | any;
}

@Component({
    selector: 'app-total-income',
    standalone: true,
    imports: [MaterialModule, NgApexchartsModule, MatButtonModule, TablerIconsModule],
    templateUrl: './total-income.component.html',
})
export class AppTotalIncomeComponent {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public totalincomeChart!: Partial<totalincomeChart> | any;

    constructor() {
        this.totalincomeChart = {

            chart: {
                id: "total-income",
                type: "area",
                height: 75,
                sparkline: {
                    enabled: true,
                },
                group: "sparklines",
                fontFamily: "inherit",
                foreColor: "#adb0bb",
            },
            series: [
                {
                    name: "Total Income",
                    color: "#16cdc7",
                    data: [25, 66, 20, 40, 12, 58, 20],
                },
            ],
            stroke: {
                curve: "smooth",
                width: 2,
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 0,
                    inverseColors: false,
                    opacityFrom: 0,
                    opacityTo: 0,
                    stops: [20, 180],
                },
            },

            markers: {
                size: 0,
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: true,
                    position: "right",
                },
                x: {
                    show: false,
                },
            },

        };
    }
}
