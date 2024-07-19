import XApp10 from '@girs/xapp-1.0';

declare global {
    export interface GjsGiImports {
        XApp: typeof XApp10;
    }
}

export default GjsGiImports;
