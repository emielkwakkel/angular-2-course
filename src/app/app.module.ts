import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarService } from "./car/car.service";
import { RouterModule } from "@angular/router";
import { EngineListComponent } from './engine/engine-list/engine-list.component';
import { EngineDetailComponent } from './engine/engine-detail/engine-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EngineService } from "./engine/engine.service";

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        EngineListComponent,
        EngineDetailComponent,
        DashboardComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'engines', component: EngineListComponent },
            { path: 'car', component: CarComponent },
            { path: 'engine/:id', component: EngineDetailComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ])
    ],
    providers: [
        CarService,
        EngineService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
