declare module 'gi://GUPnP?version=1.0' {
    import GUPnP10 from '@girs/gupnp-1.0';
    export default GUPnP10;
}

declare module 'gi://GUPnP' {
    import GUPnP10 from 'gi://GUPnP?version=1.0';
    export default GUPnP10;
}
