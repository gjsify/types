import Mbim10 from '@girs/mbim-1.0';

declare global {
    export interface GjsGiImports {
        Mbim: typeof Mbim10;
    }
}

export default GjsGiImports;
