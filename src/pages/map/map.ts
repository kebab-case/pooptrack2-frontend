import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  title: string = 'My first AGM project';
  lat: number = 57.695143;
  lng: number = 11.981348;
  zoomControl: boolean = false;
  streetViewControl: boolean = false;
  disDoubleClickZoom: boolean = true;
  zoom: number;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private dataService: DataService) {
   this.zoom = dataService.getZoom();
  }
  
}
