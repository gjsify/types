
import GUPnPAV10 from '@girs/gupnpav-1.0';


declare global {
    export interface GjsGiImports {
        GUPnPAV: typeof GUPnPAV10;
    }
}

export default GjsGiImports;


