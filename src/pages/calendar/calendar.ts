import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

import { CalculateCycles } from '../../assets/services/calculateCycles'

import { calendarInterface } from './calendarInterface';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  viewTitle: string;
  eventSource;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public calculateCycles: CalculateCycles) {
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: "es-es",
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      }
    }
  };

  nextMonth() {
    document.querySelector('.swiper-container')['swiper']['slideNext']();
  }

  prevMonth() {
    document.querySelector('.swiper-container')['swiper']['slidePrev']();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    // this.isToday = today.getTime() === event.getTime();
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Añade tu primer ciclo',
      inputs: [
        {
          type:'date',
          name: 'date',
          placeholder: 'Última menstruación'
        },
        {
          type:'number',
          name: 'MenstruationDuration',
          placeholder: 'Duración menstruación'
        },
        {
          type:'number',
          name: 'cicleDuration',
          placeholder: 'Duración cliclo'
        },
      ],
      buttons: [
        {
          text: 'Añadir',
          handler: data => {
            this.addNewCycle(data);
          }
        }
      ]
    });
    prompt.present();
  }

  addNewCycle(data:calendarInterface){
    this.eventSource = this.calculateCycles.calculateCycles(data);
    console.log(this.eventSource);
  }

}
