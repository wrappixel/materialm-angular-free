import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

interface stats {
    id: number;
    color: string;
    title: string;
    subtitle: string;
    icon: string;
    badge: string;
}

@Component({
    selector: 'app-earning-reports',
    imports: [MaterialModule, TablerIconsModule],
    templateUrl: './earning-reports.component.html',
})
export class AppEarningReportsComponent {
    stats: stats[] = [
        {
            id: 1,
            color: 'primary',
            title: 'Bank Transfer',
            subtitle: 'and +1 more',
            icon: 'solar:card-line-duotone',
            badge: '16.3%',
        },
        {
            id: 2,
            color: 'error',
            title: 'Net Profit',
            subtitle: 'and +4 more',
            icon: 'solar:wallet-2-line-duotone',
            badge: '12.55%',
        },
        {
            id: 3,
            color: 'secondary',
            title: 'Bank Transfer',
            subtitle: 'and +4 more',
            icon: 'solar:course-up-line-duotone',
            badge: '16.3%',
        },
        {
            id: 4,
            color: 'primary',
            title: 'Total Expenses',
            subtitle: 'and +2 more',
            icon: 'solar:waterdrops-line-duotone',
            badge: '8.28%',
        },
        {
            id: 5,
            color: 'warning',
            title: 'Marketing',
            subtitle: 'and +3 more',
            icon: 'solar:waterdrops-line-duotone',
            badge: '9.25%',
        },
    ];
}
