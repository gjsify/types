
import GUPnPIgd from './gupnpigd-1.6.js';

declare global {
    export interface GjsGiImports {
        GUPnPIgd: typeof GUPnPIgd;
    }
}

export default GjsGiImports;


