import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  zoomControl: boolean = true;
  streetViewControl: boolean = false;
  disDoubleClickZoom: boolean = true;
  zoom: number;
  flat: boolean = true;
  markerClickable: boolean = true;
  public markers = [
    {
      id: 1,
      lat: 57.695143,
      lng: 11.981348
    },
    {
      id: 2,
      lat: 57.595143,
      lng: 11.971348
    }
  ];
  


  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private dataService: DataService, private alertCtrl: AlertController) {
   this.zoom = dataService.getZoom();
   navigator.geolocation.getCurrentPosition(position => {  
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
})
  }
  
  mapAlert(id) {
    let alert = this.alertCtrl.create({
      title: 'Pos',
      subTitle: 'Pos ' + id,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
