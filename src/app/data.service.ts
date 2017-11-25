
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()

export class DataService {
    zoomSetting: number = 10;
    anon: string;
    constructor() { }

    setZoom(zoom) {
       this.zoomSetting = zoom;
    }

    getZoom() {
        return this.zoomSetting;
    };

    setAnon() {
        this.anon = UUID.UUID();
    }

    getAnon() {
        return this.anon;
    }
}