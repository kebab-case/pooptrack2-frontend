
import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
    zoomSetting: number = 10;
    anon: number;
    constructor() { }

    setZoom(zoom) {
       this.zoomSetting = zoom;
    }

    getZoom() {
        return this.zoomSetting;
    };

    setAnon() {
        this.anon = Math.floor((Math.random()*44123213372)+1);
    }

    getAnon() {
        return this.anon;
    }
}