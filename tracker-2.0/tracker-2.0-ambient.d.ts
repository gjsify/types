
declare module 'gi://Tracker?version=2.0' {
    import Tracker from '@girs/tracker-2.0';
    export default Tracker;
}

declare module 'gi://Tracker' {
    import Tracker20 from 'gi://Tracker?version=2.0';
    export default Tracker20;
}


