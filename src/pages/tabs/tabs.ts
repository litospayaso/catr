import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { MediaPage } from '../media/media';
import { PhasePage } from '../phase/phase';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  calendarRoot = CalendarPage;
  phaseRoot = PhasePage;
  settingsRoot = SettingsPage;
  mediaRoot = MediaPage;

  constructor() {

  }
}
