
declare module 'gi://Tracker?version=3.0' {
    import Tracker30 from '@girs/tracker-3.0';
    export default Tracker30;
}

declare module 'gi://Tracker' {
    export * from 'gi://Tracker?version=3.0';
}


