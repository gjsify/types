import Gee10 from '@girs/gee-1.0';

declare global {
    export interface GjsGiImports {
        Gee: typeof Gee10;
    }
}

export default GjsGiImports;
