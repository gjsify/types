import GstApp10 from '@girs/gstapp-1.0';

declare global {
    export interface GjsGiImports {
        GstApp: typeof GstApp10;
    }
}

export default GjsGiImports;
