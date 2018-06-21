export interface calendarInterface {
    date: Date;
    MenstruationDuration: Number;
    cicleDuration: Number;
}

export interface eventInterface {
    title: string;
    startTime: Date;
    endTime: Date;
    allDay: boolean;
    color: string;
}