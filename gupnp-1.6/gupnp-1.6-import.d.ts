import GUPnP16 from '@girs/gupnp-1.6';

declare global {
    export interface GjsGiImports {
        GUPnP: typeof GUPnP16;
    }
}

export default GjsGiImports;
