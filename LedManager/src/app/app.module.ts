import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LedManager } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    LedManager,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LedManager)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LedManager,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
