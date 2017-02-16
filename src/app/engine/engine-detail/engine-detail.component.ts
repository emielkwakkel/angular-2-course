import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEngine } from '../engine.interface'
import { EngineService } from "../engine.service";

@Component({
    selector: 'app-engine-detail',
    templateUrl: './engine-detail.component.html',
    styleUrls: ['./engine-detail.component.css']
})
export class EngineDetailComponent implements OnInit {
    private id: number;
    public engine: IEngine = {
        id: 1,
        name: ''
    };
    public errorMessage: string = '';

    constructor(private _route: ActivatedRoute,
                private _engineService: EngineService,
                private _router: Router) {
        this.id = this._route.snapshot.params['id'];
    }

    ngOnInit() {
        this.getEngine(this.id);
    }

    onBack() : void {
        this._router.navigate(['/engines'])
    }

    private getEngine(id) {
        return this._engineService
            .getEngine(id)
            .subscribe(engine => this.engine = engine,
                error => this.errorMessage = <any>error);
    }

}
