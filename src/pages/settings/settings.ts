import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  zoomSetting: number;
  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.dataService.setZoom(this.zoomSetting);

  }
}
