import Gsk40 from '@girs/gsk-4.0';

declare global {
    export interface GjsGiImports {
        Gsk: typeof Gsk40;
    }
}

export default GjsGiImports;
