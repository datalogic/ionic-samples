import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AutoScanTrigger } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    AutoScanTrigger,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AutoScanTrigger)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AutoScanTrigger,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
