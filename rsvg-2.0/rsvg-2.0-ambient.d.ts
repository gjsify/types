
declare module 'gi://Rsvg?version=2.0' {
    import Rsvg from './rsvg-2.0.d.ts';
    export default Rsvg;
}

declare module 'gi://Rsvg' {
    import Rsvg20 from 'gi://Rsvg?version=2.0';
    export default Rsvg20;
}


