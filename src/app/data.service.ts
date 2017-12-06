
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()

export class DataService {
    zoomSetting: number = 10;
    constructor(private localStorageService: LocalStorageService) { }

    setZoom(zoom) {
       this.zoomSetting = zoom;
    }

    getZoom() {
        return this.zoomSetting;
    };

    setAnon() {
        this.localStorageService.set('anon_id', UUID.UUID());
    }

    getAnon() {
        return this.localStorageService.get('anon_id');
    }

    storeTime(ticks) {
        this.localStorageService.set('totalTime', ticks + this.getTime());
    }

    getTime() {
        return this.localStorageService.get('totalTime');
    }

    storeCash(income) {
        this.localStorageService.set('totalCash', income + this.getCash());
    }

    getCash() {
        return this.localStorageService.get('totalCash');
    }
}
