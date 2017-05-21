import { Component, OnInit } from '@angular/core';
import { EngineService } from "../engine.service";
import { IEngine } from "../engine.interface";

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.css']
})
export class EngineListComponent implements OnInit {
  public engines: IEngine[];
  public errorMessage: string = '';

  constructor(private _engineService: EngineService) { }

  ngOnInit() {
    this._engineService
        .getEngines()
        .subscribe(engines => this.engines = <IEngine[]>engines,
            error => this.errorMessage = <any>error);
  }
}
