
import GUPnPIgd10 from '@girs/gupnpigd-1.0';

declare global {
    export interface GjsGiImports {
        GUPnPIgd: typeof GUPnPIgd10;
    }
}

export default GjsGiImports;


