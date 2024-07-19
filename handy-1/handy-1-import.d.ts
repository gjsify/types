import Handy1 from '@girs/handy-1';

declare global {
    export interface GjsGiImports {
        Handy: typeof Handy1;
    }
}

export default GjsGiImports;
