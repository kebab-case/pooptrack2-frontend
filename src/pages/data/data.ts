import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-data',
  templateUrl: 'data.html'
})
export class DataPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private time = this.dataService.getTime();
  private cash = this.dataService.getCash();
  
  constructor(public navCtrl: NavController, private dataService: DataService) {  }

}
