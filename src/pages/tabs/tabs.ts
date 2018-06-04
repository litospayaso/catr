import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MediaPage } from '../media/media';
import { PhasePage } from '../phase/phase';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  phaseRoot = PhasePage;
  aboutRoot = AboutPage;
  mediaRoot = MediaPage;
  calendarRoot = CalendarPage;

  constructor() {

  }
}
