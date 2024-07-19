import Libosinfo10 from '@girs/libosinfo-1.0';

declare global {
    export interface GjsGiImports {
        Libosinfo: typeof Libosinfo10;
    }
}

export default GjsGiImports;
