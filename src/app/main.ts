import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare global {
  interface Window {
    AudioContext: any;
    webkitAudioContext: any;
    mozAudioContext: any;
    oAudioContext: any;
    msAudioContext: any;
  }
}


platformBrowserDynamic().bootstrapModule(AppModule);
