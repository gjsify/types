import Xed10 from '@girs/xed-1.0';

declare global {
    export interface GjsGiImports {
        Xed: typeof Xed10;
    }
}

export default GjsGiImports;
