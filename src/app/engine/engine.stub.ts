import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { engines, engine } from '../../mocks/engines';
import { IEngine } from './engine.interface';

export class EngineStub {
    public getEngines(): Observable<IEngine[]> {
        return from(engines);
    }

    public getEngine(id: number): Observable<IEngine> {
        return from([engine]);
    }
}