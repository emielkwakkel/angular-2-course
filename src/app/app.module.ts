import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarService } from "./car/car.service";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EngineModule } from "./engine/engine.module";

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        DashboardComponent,
        PageNotFoundComponent
    ],
    imports: [
        EngineModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'car', component: CarComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ])
    ],
    providers: [
        CarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
