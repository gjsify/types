
declare module 'gi://GLibUnix?version=2.0' {
    import GLibUnix from './glibunix-2.0.d.ts';
    export default GLibUnix;
}

declare module 'gi://GLibUnix' {
    import GLibUnix20 from 'gi://GLibUnix?version=2.0';
    export default GLibUnix20;
}


