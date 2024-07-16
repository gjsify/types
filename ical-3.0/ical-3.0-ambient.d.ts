
declare module 'gi://ICal?version=3.0' {
    import ICal from './ical-3.0.d.ts';
    export default ICal;
}

declare module 'gi://ICal' {
    import ICal30 from 'gi://ICal?version=3.0';
    export default ICal30;
}


