import GUPnPIgd16 from '@girs/gupnpigd-1.6';

declare global {
    export interface GjsGiImports {
        GUPnPIgd: typeof GUPnPIgd16;
    }
}

export default GjsGiImports;
