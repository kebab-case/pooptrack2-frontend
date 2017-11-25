
import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
    zoomSetting: number = 12;
    constructor() { }

    setZoom(zoom) {
       this.zoomSetting = zoom;
    }

    getZoom() {
        return this.zoomSetting;
    };
}