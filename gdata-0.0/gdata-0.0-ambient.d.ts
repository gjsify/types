
declare module 'gi://GData?version=0.0' {
    import GData from './gdata-0.0.d.ts';
    export default GData;
}

declare module 'gi://GData' {
    import GData00 from 'gi://GData?version=0.0';
    export default GData00;
}


