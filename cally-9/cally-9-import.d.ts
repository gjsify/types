import type Cally9 from '@girs/cally-9';

declare global {
    export interface GjsGiImports {
        Cally: typeof Cally9;
    }
}

export default GjsGiImports;
