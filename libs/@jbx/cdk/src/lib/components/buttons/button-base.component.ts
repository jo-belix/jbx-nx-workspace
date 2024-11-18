import { EventEmitter, Input, Output } from "@angular/core";

export abstract class ButtonBaseComponent {

    @Input({required: true}) public id!: string;
    @Input({required: true}) public ariaLabel!: string;
    @Input() public isDisabled = false;
    @Output() clickNg: EventEmitter<void> = new EventEmitter<void>();

    protected onbuttonClick(): void {
        this.clickNg.emit();
      }

}
