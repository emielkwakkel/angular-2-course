import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEngine } from '../engine.interface'
import { EngineService } from "../engine.service";

@Component({
    selector: 'app-engine-detail',
    templateUrl: './engine-detail.component.html',
    styleUrls: ['./engine-detail.component.css']
})
export class EngineDetailComponent implements OnInit {
    private id: number;
    public engine: IEngine[];
    public errorMessage: string = '';

    constructor(private _route: ActivatedRoute, private _engineService: EngineService) {
        this.id = this._route.snapshot.params['id'];
    }

    ngOnInit() {
        this._engineService
            .getEngine(this.id)
            .subscribe(engine => this.engine = <IEngine[]> engine,
                error => this.errorMessage = <any>error);
    }

}
