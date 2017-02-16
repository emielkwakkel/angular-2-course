import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CarService} from "./car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() wheels: number;
  @Output() startEngine: EventEmitter<string> = new EventEmitter<string>();

  // Set public values
  public engines: string[];
  public errorMessage: string = '';

  constructor(private _carService: CarService) { }

  onClick() {
    this.startEngine.emit('Starting engines');
  }

  ngOnInit() {
    console.log(this.wheels);
    this._carService
      .getEngines()
      .subscribe(engines => this.engines = <string[]>engines,
                 error => this.errorMessage = <any>error);
  }

}
