import { Injectable } from "@angular/core";
import { eventInterface, calendarInterface } from '../../pages/calendar/calendarInterface';

@Injectable()
export class CalculateCycles {
    constructor() {
    }

    calculateCycles(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let period = this.calculateMestruation(data);
        let ovulation = this.calculateOvulation(data);
        let folicular = this.calculateFolicular(data);
        let lutea = this.calculateLutea(data);
        return [period, ovulation, folicular, lutea];
    }

    calculateOvulation(data: calendarInterface, cycles: number = 2): eventInterface {
        let ovulation: eventInterface;

        data.date = new Date(data.date);
        let startOvulation = new Date(data.date);
        startOvulation.setDate(startOvulation.getDate() + (Number(data.cicleDuration) - 16));
        startOvulation = new Date(startOvulation);

        let endOvulation = new Date(data.date);
        endOvulation.setDate(endOvulation.getDate() + (Number(data.cicleDuration) - 11));
        endOvulation = new Date(endOvulation);

        ovulation = {
            title: 'Fase Ovulatioria',
            startTime: startOvulation,
            endTime: endOvulation,
            allDay: true,
            color: "pink"
        }
        return ovulation;
    }
    
    calculateFolicular(data: calendarInterface, cycles: number = 2): eventInterface {
        let folicular: eventInterface;

        data.date = new Date(data.date);
        let startFolicular = new Date(data.date);
        startFolicular.setDate(startFolicular.getDate() + Number(data.MenstruationDuration));
        startFolicular = new Date(startFolicular);

        let endFolicular = new Date(data.date);
        endFolicular.setDate(endFolicular.getDate() + (Number(data.cicleDuration) - 16));
        endFolicular = new Date(endFolicular);

        folicular = {
            title: 'Fase Folicular',
            startTime: startFolicular,
            endTime: endFolicular,
            allDay: true,
            color: "purple"
        }
        return folicular;
    }

    calculateLutea(data: calendarInterface, cycles: number = 2): eventInterface {
        let lutea: eventInterface;

        data.date = new Date(data.date);
        let startLutea = new Date(data.date);
        startLutea.setDate(startLutea.getDate() + (Number(data.cicleDuration) - 12));
        startLutea = new Date(startLutea);

        let endLutea = new Date(data.date);
        endLutea.setDate(endLutea.getDate() + Number(data.cicleDuration));
        endLutea = new Date(endLutea);

        lutea = {
            title: 'Fase Lutea',
            startTime: startLutea,
            endTime: endLutea,
            allDay: true,
            color: "MediumSlateBlue"
        }
        return lutea;
    }

    calculateMestruation(data: calendarInterface, cycles: number = 2): eventInterface {
        let period: eventInterface;

        data.date = new Date(data.date);
        let endMenstruation = new Date(data.date);
        endMenstruation.setDate(endMenstruation.getDate() + Number(data.MenstruationDuration));
        endMenstruation = new Date(endMenstruation);

        period = {
            title: 'Fase Menstrual',
            startTime: data.date,
            endTime: endMenstruation,
            allDay: true,
            color: "red"
        }
        return period;
    }
}