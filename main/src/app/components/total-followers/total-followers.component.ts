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
    ApexXAxis,
    ApexYAxis,
    NgApexchartsModule,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface totalfollowersChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    responsive: ApexResponsive;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string | any;
}

@Component({
    selector: 'app-total-followers',
    imports: [MaterialModule, NgApexchartsModule, MatButtonModule, TablerIconsModule],
    templateUrl: './total-followers.component.html',
})
export class AppTotalFollowersComponent {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public totalfollowersChart!: Partial<totalfollowersChart> | any;

    constructor() {
        this.totalfollowersChart = {

            series: [
                {
                    name: "Total",
                    data: [29, 52, 38, 47, 56],
                },
                {
                    name: "Followers",
                    data: [71, 71, 71, 71, 71],
                },
            ],
            chart: {
                fontFamily: "inherit",
                type: "bar",
                height: 100,
                stacked: true,
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            grid: {
                show: false,
                borderColor: "rgba(0,0,0,0.1)",
                strokeDashArray: 1,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            colors: ["#ff6692", "#e7d0d9"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                    borderRadius: [3],
                    borderRadiusApplication: "end",
                    borderRadiusWhenStacked: "all",
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                theme: "dark",
            },
            legend: {
                show: false,
            },
        };
    }
}
