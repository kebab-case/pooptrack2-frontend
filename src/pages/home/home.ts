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
  
  public events = [
    {
      name: "Kalle",
      comment: "jefla götta",
      date: "2017-11-11 11:11:11",
      img: "assets/imgs/1.png",
      like: "2"
    },
    {
      name: "Balle",
      comment: "sprut delux",
      date: "2017-12-12 11:11:11",
      img: "assets/imgs/3.png",
      like: "3"
    }
    ,
    {
      name: "Jude",
      comment: "gas chamber 1337",
      date: "2017-15-12 11:33:11",
      img: "assets/imgs/6.png",
      like: "100"
    }
  ];

  alert1() {
    let alert = this.alertCtrl.create({
      title: 'SMR',
      subTitle: 'Sug min röv macke',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
