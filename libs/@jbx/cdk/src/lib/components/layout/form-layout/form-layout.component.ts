import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'jbx-form-layout',
    imports: [CommonModule],
    templateUrl: './form-layout.component.html',
    styleUrl: './form-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLayoutComponent {}
