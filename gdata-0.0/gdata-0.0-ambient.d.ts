
declare module 'gi://GData?version=0.0' {
    import GData00 from '@girs/gdata-0.0';
    export default GData00;
}

declare module 'gi://GData' {
    export * from 'gi://GData?version=0.0';
}


