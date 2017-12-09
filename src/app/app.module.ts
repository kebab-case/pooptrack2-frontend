import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { DataPage } from '../pages/data/data';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { DataService } from './data.service';
import { PopoverPage } from '../pages/home/popoverPage'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { SimpleTimer } from 'ng2-simple-timer';
import { RecordingService } from './../shared/recording-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    DataPage,
    TabsPage,
    SettingsPage,
    SignupPage,
    LoginPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2qDXj6Z5jpkWOL_mPPeO4kodCx-6HqDk'
    }),
    LocalStorageModule.withConfig({
      prefix: 'pooptrack2',
      storageType: 'localStorage'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    DataPage,
    TabsPage,
    SettingsPage,
    SignupPage,
    LoginPage,
    PopoverPage
  ],
  providers: [
    RecordingService,
    StatusBar,
    SimpleTimer,
    SplashScreen,
    DataService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
