
declare module 'gi://GioUnix?version=2.0' {
    import GioUnix from './giounix-2.0.d.ts';
    export default GioUnix;
}

declare module 'gi://GioUnix' {
    import GioUnix20 from 'gi://GioUnix?version=2.0';
    export default GioUnix20;
}


