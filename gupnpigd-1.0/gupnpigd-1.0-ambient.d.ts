
declare module 'gi://GUPnPIgd?version=1.0' {
    import GUPnPIgd10 from '@girs/gupnpigd-1.0';
    export default GUPnPIgd10;
}

declare module 'gi://GUPnPIgd' {
    export * from 'gi://GUPnPIgd?version=1.0';
}


