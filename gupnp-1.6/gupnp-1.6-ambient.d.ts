declare module 'gi://GUPnP?version=1.6' {
    import GUPnP16 from '@girs/gupnp-1.6';
    export default GUPnP16;
}

declare module 'gi://GUPnP' {
    import GUPnP16 from 'gi://GUPnP?version=1.6';
    export default GUPnP16;
}
