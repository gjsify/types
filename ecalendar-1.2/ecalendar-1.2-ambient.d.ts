declare module 'gi://ECalendar?version=1.2' {
    import ECalendar12 from '@girs/ecalendar-1.2';
    export default ECalendar12;
}

declare module 'gi://ECalendar' {
    import ECalendar12 from 'gi://ECalendar?version=1.2';
    export default ECalendar12;
}
