import GstSdp10 from '@girs/gstsdp-1.0';

declare global {
    export interface GjsGiImports {
        GstSdp: typeof GstSdp10;
    }
}

export default GjsGiImports;
