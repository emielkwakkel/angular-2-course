import { NgModule } from '@angular/core';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { EngineListComponent } from "./engine-list/engine-list.component";
import { RouterModule } from "@angular/router";
import { EngineDetailGuard } from "./engine-detail/engine-detail-guard.service";
import { EngineService } from "./engine.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        EngineDetailComponent,
        EngineListComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'engines', component: EngineListComponent },
            {   path: 'engine/:id',
                component: EngineDetailComponent,
                canActivate: [ EngineDetailGuard ]}
        ])
    ],
    providers: [
        EngineService,
        EngineDetailGuard
    ]
})
export class EngineModule {}