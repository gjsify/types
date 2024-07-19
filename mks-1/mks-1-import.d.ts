import Mks1 from '@girs/mks-1';

declare global {
    export interface GjsGiImports {
        Mks: typeof Mks1;
    }
}

export default GjsGiImports;
