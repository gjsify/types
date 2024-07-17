
import GUPnPAV from './gupnpav-1.0.js';

declare global {
    export interface GjsGiImports {
        GUPnPAV: typeof GUPnPAV;
    }
}

export default GjsGiImports;


