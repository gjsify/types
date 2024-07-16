
declare module 'gi://GUPnP?version=1.2' {
    import GUPnP from './gupnp-1.2.d.ts';
    export default GUPnP;
}

declare module 'gi://GUPnP' {
    import GUPnP12 from 'gi://GUPnP?version=1.2';
    export default GUPnP12;
}


