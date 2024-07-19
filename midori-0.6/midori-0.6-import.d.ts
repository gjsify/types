import Midori06 from '@girs/midori-0.6';

declare global {
    export interface GjsGiImports {
        Midori: typeof Midori06;
    }
}

export default GjsGiImports;
