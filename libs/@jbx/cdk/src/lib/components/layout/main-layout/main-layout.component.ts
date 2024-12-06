import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'jbx-main-layout',
    imports: [CommonModule],
    templateUrl: './main-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
