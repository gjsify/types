declare module 'gi://Tracker?version=1.0' {
    import Tracker10 from '@girs/tracker-1.0';
    export default Tracker10;
}

declare module 'gi://Tracker' {
    import Tracker10 from 'gi://Tracker?version=1.0';
    export default Tracker10;
}
