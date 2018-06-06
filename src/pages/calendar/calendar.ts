import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  viewTitle: string;
  eventSource;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
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

  loadEvents() {
    this.eventSource = this.createRandomEvents();
    console.log("JEJE",this.eventSource);
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
          color:"red"
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
          color:"red"
        });
      }
    }
    return events;
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
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.addNewCycle(data);
          }
        }
      ]
    });
    prompt.present();
  }

  addNewCycle(data){
    data.date = new Date(data.date)

    var endMenstruation = new Date(data.date);
    endMenstruation.setDate(endMenstruation.getDate() + data.MenstruationDuration);
    endMenstruation = new Date(endMenstruation);
  
    console.log("DIOS!",data)
    const period={
      title: 'Fase Menstrual',
      startTime: data.date,
      endTime: endMenstruation,
      allDay: true,
      color:"red"
    }
  
    this.eventSource = [period];
    console.log(this.eventSource);
  }

}
