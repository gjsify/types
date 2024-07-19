import GstValidate10 from '@girs/gstvalidate-1.0';

declare global {
    export interface GjsGiImports {
        GstValidate: typeof GstValidate10;
    }
}

export default GjsGiImports;
