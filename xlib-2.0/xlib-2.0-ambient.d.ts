
declare module 'gi://xlib?version=2.0' {
    import xlib from './xlib-2.0.d.ts';
    export default xlib;
}

declare module 'gi://xlib' {
    import Xlib20 from 'gi://xlib?version=2.0';
    export default Xlib20;
}


