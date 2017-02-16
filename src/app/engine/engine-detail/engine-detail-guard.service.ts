import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable()
export class EngineDetailGuard implements CanActivate {

    constructor(private _router: Router) {}

    /**
     * Guard the Engine detail page by checking id in url to be a number
     * @param {Object} route Navigating route
     * @return {boolean} canActivate
     */
    canActivate(route: ActivatedRouteSnapshot) : boolean {
        let id = +route.url[1].path;
        if (isNaN(id)) {
            alert('ID must be a number');
            this._router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }
}