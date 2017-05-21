import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEngine } from '../engine/engine.interface';

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
