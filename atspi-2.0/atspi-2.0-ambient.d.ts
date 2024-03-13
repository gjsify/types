
declare module 'gi://Atspi?version=2.0' {
    import Atspi20 from '@girs/atspi-2.0';
    export default Atspi20;
}

declare module 'gi://Atspi' {
    export * from 'gi://Atspi?version=2.0';
}


