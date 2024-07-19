import Ags60 from '@girs/ags-6.0';

declare global {
    export interface GjsGiImports {
        Ags: typeof Ags60;
    }
}

export default GjsGiImports;
