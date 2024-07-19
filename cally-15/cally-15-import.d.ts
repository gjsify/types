import Cally15 from '@girs/cally-15';

declare global {
    export interface GjsGiImports {
        Cally: typeof Cally15;
    }
}

export default GjsGiImports;
