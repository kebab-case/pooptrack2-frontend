import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
    templateUrl: 'popoverPage.html'
  })
  export class PopoverPage {
    
    ticks = 0;
    sTicks = '';
    sIncome = 0;
    timerId: string;
    private selectedShit = 4;

    constructor(public viewCtrl: ViewController, private st: SimpleTimer) {}
    startStopwatch(){
      if (!this.timerId) {
      this.st.newTimer('1sec', 1);
      this.timerId = this.st.subscribe('1sec', e => this.timerCallback());
      }
    }
    timerCallback() {
      this.sTicks = this.fmtMSS(this.ticks++);
      this.sIncome = 3*this.ticks;
    }
    
    fmtMSS(s) {
      return(s-(s%=60))/60+(9<s?':':':0')+s
    }

    close() {
    this.st.unsubscribe(this.timerId);
    this.st.delTimer('1sec');
    this.viewCtrl.dismiss();
    
    }
  }