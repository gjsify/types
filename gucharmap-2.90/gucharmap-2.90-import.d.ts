import Gucharmap290 from '@girs/gucharmap-2.90';

declare global {
    export interface GjsGiImports {
        Gucharmap: typeof Gucharmap290;
    }
}

export default GjsGiImports;
