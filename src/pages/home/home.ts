import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }
  

  alert1() {
    let alert = this.alertCtrl.create({
      title: 'SMR',
      subTitle: 'Sug min röv macke',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
