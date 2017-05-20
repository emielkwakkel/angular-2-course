import { EngineListComponent } from "./engine-list/engine-list.component";
import { EngineDetailComponent } from "./engine-detail/engine-detail.component";
import { EngineDetailGuard } from "./engine-detail/engine-detail-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const EngineRoutes : Routes = [
    { path: 'engines', component: EngineListComponent },
    {   path: 'engine/:id',
        component: EngineDetailComponent,
        canActivate: [ EngineDetailGuard ]}
];

export const routing: ModuleWithProviders = RouterModule.forChild(EngineRoutes);