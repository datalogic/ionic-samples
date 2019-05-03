import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { wedge } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    wedge,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(wedge)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    wedge,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
