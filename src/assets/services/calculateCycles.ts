import { Injectable } from "@angular/core";
import { eventInterface, calendarInterface } from '../../pages/calendar/calendarInterface';

@Injectable()
export class CalculateCycles {
    constructor() {
    }

    calculateCycles(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let period = this.calculateMestruation(data);
        let folicular = this.calculateFolicular(data);
        let lutea = this.calculateLutea(data);
        let ovulation = this.calculateOvulation(data);
        return [...period, ...folicular, ...lutea, ...ovulation];
    }

    calculateOvulation(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let result: eventInterface[] = [];
        for (let i = 0; i < cycles; i++) {
            let ovulation: eventInterface;

            data.date = new Date(data.date);
            let startOvulation = new Date(data.date);
            startOvulation.setDate(startOvulation.getDate() + (Number(data.cicleDuration) - 16) + (Number(data.cicleDuration) * i));
            startOvulation = new Date(startOvulation);
            let endOvulation = new Date(data.date);
            endOvulation.setDate(endOvulation.getDate() + (Number(data.cicleDuration) - 11) + (Number(data.cicleDuration) * i));
            endOvulation = new Date(endOvulation);
            ovulation = {
                title: 'Fase Ovulatioria',
                startTime: startOvulation,
                endTime: endOvulation,
                allDay: true,
                color: "pink"
            }
            result.push(ovulation);
        }
        return result;
    }

    calculateFolicular(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let result: eventInterface[] = [];
        for (let i = 0; i < cycles; i++) {
            let folicular: eventInterface;
    
            data.date = new Date(data.date);
            let startFolicular = new Date(data.date);
            startFolicular.setDate(startFolicular.getDate() + Number(data.MenstruationDuration) + (Number(data.cicleDuration) * i));
            startFolicular = new Date(startFolicular);
    
            let endFolicular = new Date(data.date);
            endFolicular.setDate(endFolicular.getDate() + (Number(data.cicleDuration) - 16) + (Number(data.cicleDuration) * i));
            endFolicular = new Date(endFolicular);
    
            folicular = {
                title: 'Fase Folicular',
                startTime: startFolicular,
                endTime: endFolicular,
                allDay: true,
                color: "purple"
            }
            result.push(folicular);
        }
        return result;
    }

    calculateLutea(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let result: eventInterface[] = [];
        for (let i = 0; i < cycles; i++) {
            let lutea: eventInterface;
    
            data.date = new Date(data.date);
            let startLutea = new Date(data.date);
            startLutea.setDate(startLutea.getDate() + (Number(data.cicleDuration) - 12) + (Number(data.cicleDuration) * i));
            startLutea = new Date(startLutea);
    
            let endLutea = new Date(data.date);
            endLutea.setDate(endLutea.getDate() + Number(data.cicleDuration) + (Number(data.cicleDuration) * i));
            endLutea = new Date(endLutea);
    
            lutea = {
                title: 'Fase Lutea',
                startTime: startLutea,
                endTime: endLutea,
                allDay: true,
                color: "MediumSlateBlue"
            }
            result.push(lutea);
        }
        return result;
    }

    calculateMestruation(data: calendarInterface, cycles: number = 2): eventInterface[] {
        let result: eventInterface[] = [];
        for (let i = 0; i < cycles; i++) {
            let period: eventInterface;
    
            data.date = new Date(data.date);

            let startMenstruation = new Date(data.date);
            startMenstruation.setDate(startMenstruation.getDate() +  (Number(data.cicleDuration) * i));
            startMenstruation = new Date(startMenstruation);

            let endMenstruation = new Date(data.date);
            endMenstruation.setDate(endMenstruation.getDate() + Number(data.MenstruationDuration) + (Number(data.cicleDuration) * i));
            endMenstruation = new Date(endMenstruation);
    
            period = {
                title: 'Fase Menstrual',
                startTime: startMenstruation,
                endTime: endMenstruation,
                allDay: true,
                color: "red"
            }
            result.push(period);
        }
        return result;
    }
}