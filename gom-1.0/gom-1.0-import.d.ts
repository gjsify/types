import Gom10 from '@girs/gom-1.0';

declare global {
    export interface GjsGiImports {
        Gom: typeof Gom10;
    }
}

export default GjsGiImports;
