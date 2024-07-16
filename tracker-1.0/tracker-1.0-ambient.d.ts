
declare module 'gi://Tracker?version=1.0' {
    import Tracker from './tracker-1.0.d.ts';
    export default Tracker;
}

declare module 'gi://Tracker' {
    import Tracker10 from 'gi://Tracker?version=1.0';
    export default Tracker10;
}


