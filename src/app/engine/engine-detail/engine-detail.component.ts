import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../car/car.service';

@Component({
  selector: 'app-engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: ['./engine-detail.component.css']
})
export class EngineDetailComponent implements OnInit {
  private id: number;
  public engine: any;
  public errorMessage: string = '';

  constructor(private _route: ActivatedRoute, private _carService: CarService) {
    this.id = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this._carService
      .getEngine(this.id)
      .subscribe(engine => this.engine = engine,
                 error => this.errorMessage = <any>error);
  }

}
