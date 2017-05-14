import { $, $$ } from "protractor";

export class EnginePage {
    get engineList() {
        return $$('app-engine-list ul li a');
    }

    getHeaderText() {
        return $('h2').getText();
    }

    selectEngine(index: number) {
        return this.engineList.get(index).click();
    }
}
