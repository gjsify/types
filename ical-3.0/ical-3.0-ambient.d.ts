
declare module 'gi://ICal?version=3.0' {
    import ICal from '@girs/ical-3.0';
    export default ICal;
}

declare module 'gi://ICal' {
    import ICal30 from 'gi://ICal?version=3.0';
    export default ICal30;
}


