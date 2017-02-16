import { NgModule } from '@angular/core';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { EngineListComponent } from "./engine-list/engine-list.component";
import { RouterModule } from "@angular/router";
import { EngineDetailGuard } from "./engine-detail/engine-detail-guard.service";
import { EngineService } from "./engine.service";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        EngineDetailComponent,
        EngineListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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