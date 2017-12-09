import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from './popoverPage';
import { DataService } from "../../app/data.service";
import { RecordingService } from '../../shared/recording-service';
import { EventService, PoopEvent } from './event.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})

export class HomePage implements OnInit {
  public events: PoopEvent[] = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    private dataService: DataService,
    private recordingService: RecordingService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    // HÄÄÄÄÄR JOCKEEEEEEE
    // this.eventService.get()
    //   .subscribe((events: PoopEvent[]) => this.events = events);
  }

  alert1() {
    let alert = this.alertCtrl.create({
      title: 'SMR',
      subTitle: 'Sug min röv macke',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  start() {
    this.recordingService.start();
  }

  stop() {
    this.recordingService.stop();
  }
}
