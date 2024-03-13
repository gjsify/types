
declare module 'gi://GUPnPDLNA?version=2.0' {
    import GUPnPDLNA20 from '@girs/gupnpdlna-2.0';
    export default GUPnPDLNA20;
}

declare module 'gi://GUPnPDLNA' {
    export * from 'gi://GUPnPDLNA?version=2.0';
}


