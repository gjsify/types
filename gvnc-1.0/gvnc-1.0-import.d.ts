import GVnc10 from '@girs/gvnc-1.0';

declare global {
    export interface GjsGiImports {
        GVnc: typeof GVnc10;
    }
}

export default GjsGiImports;
