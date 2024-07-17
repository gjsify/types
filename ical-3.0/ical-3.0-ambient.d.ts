
declare module 'gi://ICal?version=3.0' {
    import ICal30 from '@girs/ical-3.0';
    export default ICal30;
}

declare module 'gi://ICal' {
    import ICal30 from 'gi://ICal?version=3.0';
    export default ICal30;
}


