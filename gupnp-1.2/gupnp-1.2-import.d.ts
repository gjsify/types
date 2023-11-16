
import GUPnP12 from '@girs/gupnp-1.2';

declare global {
    export interface GjsGiImports {
        GUPnP: typeof GUPnP12;
    }
}

export default GjsGiImports;


