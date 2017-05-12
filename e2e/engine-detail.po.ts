import { $, $$ } from "protractor";

export class EngineDetailPage {
    getHeaderText() {
        return $('app-engine-detail h2').getText();
    }
}
