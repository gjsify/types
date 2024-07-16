
declare module 'gi://IBus?version=1.0' {
    import IBus from './ibus-1.0.d.ts';
    export default IBus;
}

declare module 'gi://IBus' {
    import IBus10 from 'gi://IBus?version=1.0';
    export default IBus10;
}


