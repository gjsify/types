
declare module 'gi://Rsvg?version=2.0' {
    import Rsvg20 from '@girs/rsvg-2.0';
    export default Rsvg20;
}

declare module 'gi://Rsvg' {
    export * from 'gi://Rsvg?version=2.0';
}


