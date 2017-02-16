import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarService } from "./car.service";
import { IEngine } from '../engine/engine.interface';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    @Input() wheels: number;
    @Output() startEngine: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    onClick() {
        this.startEngine.emit('Starting engines');
    }

    ngOnInit() {
        console.log(this.wheels);
    }

}
