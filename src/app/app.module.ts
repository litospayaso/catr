import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MediaPage } from '../pages/media/media';
import { PhasePage } from '../pages/phase/phase';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MediaPage,
    PhasePage,
    CalendarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MediaPage,
    PhasePage,
    CalendarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
