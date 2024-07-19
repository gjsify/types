import Colord10 from '@girs/colord-1.0';

declare global {
    export interface GjsGiImports {
        Colord: typeof Colord10;
    }
}

export default GjsGiImports;
