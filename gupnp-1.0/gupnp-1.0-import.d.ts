
import GUPnP10 from '@girs/gupnp-1.0';

declare global {
    export interface GjsGiImports {
        GUPnP: typeof GUPnP10;
    }
}

export default GjsGiImports;


