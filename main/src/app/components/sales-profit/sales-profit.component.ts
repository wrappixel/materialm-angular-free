import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexFill,
    ApexGrid,
    ApexXAxis,
    ApexYAxis,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface salesprofitChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    fill: ApexFill;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
}


interface month {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-sales-profit',
    imports: [MaterialModule, TablerIconsModule, NgApexchartsModule, MatButtonModule, CommonModule],
    templateUrl: './sales-profit.component.html',
})
export class AppSalesProfitComponent {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public salesprofitChart!: Partial<salesprofitChart> | any;

    months: month[] = [
        { value: 'mar', viewValue: 'Sep 2025' },
        { value: 'apr', viewValue: 'Oct 2025' },
        { value: 'june', viewValue: 'Nov 2025' },
    ];

    constructor() {
        this.salesprofitChart = {

            series: [
                {
                    type: "area",
                    name: "This Year",
                    chart: {
                        foreColor: "#111c2d99",
                        fontSize: 12,
                        fontWeight: 500,
                        dropShadow: {
                            enabled: true,
                            enabledOnSeries: undefined,
                            top: 5,
                            left: 0,
                            blur: 3,
                            color: "#000",
                            opacity: 0.1,
                        },
                    },
                    data: [
                        {
                            x: "Aug",
                            y: 25,
                        },
                        {
                            x: "Sep",
                            y: 25,
                        },
                        {
                            x: "Oct",
                            y: 10,
                        },
                        {
                            x: "Nov",
                            y: 10,
                        },
                        {
                            x: "Dec",
                            y: 45,
                        },
                        {
                            x: "Jan",
                            y: 45,
                        },
                        {
                            x: "Feb",
                            y: 75,
                        },
                        {
                            x: "Mar",
                            y: 70,
                        },
                        {
                            x: "Apr",
                            y: 35,
                        },
                    ],
                },
                {
                    type: "line",
                    name: "Last Year",
                    chart: {
                        foreColor: "#111c2d99",
                    },
                    data: [
                        {
                            x: "Aug",
                            y: 50,
                        },
                        {
                            x: "Sep",
                            y: 50,
                        },
                        {
                            x: "Oct",
                            y: 25,
                        },
                        {
                            x: "Nov",
                            y: 20,
                        },
                        {
                            x: "Dec",
                            y: 20,
                        },
                        {
                            x: "Jan",
                            y: 20,
                        },
                        {
                            x: "Feb",
                            y: 35,
                        },
                        {
                            x: "Mar",
                            y: 35,
                        },
                        {
                            x: "Apr",
                            y: 60,
                        },
                    ],
                },
            ],
            chart: {
                height: 320,
                type: 'area',
                fontFamily: "inherit",
                foreColor: "#adb0bb",
                fontSize: "12px",
                offsetX: -15,
                offsetY: 10,
                animations: {
                    speed: 500,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ["#00A1FF", "#8965E5"],
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: undefined,
                opacity: 0.1,
                type: 'solid',
            },
            grid: {
                show: true,
                strokeDashArray: 3,
                borderColor: "#90A4AE50",
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                tickAmount: 3,
            },
            legend: {
                show: false,
            },
            tooltip: {
                theme: "dark",
            },
        };
    }
}
