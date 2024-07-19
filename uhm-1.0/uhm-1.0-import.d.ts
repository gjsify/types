import Uhm10 from '@girs/uhm-1.0';

declare global {
    export interface GjsGiImports {
        Uhm: typeof Uhm10;
    }
}

export default GjsGiImports;
