import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'jbx-page-layout',
    imports: [CommonModule],
    templateUrl: './page-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent {}
