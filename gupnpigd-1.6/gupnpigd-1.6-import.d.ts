
import GUPnPIgd from './gupnpigd-1.6.d.ts';

declare global {
    export interface GjsGiImports {
        GUPnPIgd: typeof GUPnPIgd;
    }
}

export default GjsGiImports;


