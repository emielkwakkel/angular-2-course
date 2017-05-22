import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent {
    @Input() wheels: number;
    @Output() startEngine: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.startEngine.emit('Starting engines');
    }
}
