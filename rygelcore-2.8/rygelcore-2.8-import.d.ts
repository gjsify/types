import RygelCore28 from '@girs/rygelcore-2.8';

declare global {
    export interface GjsGiImports {
        RygelCore: typeof RygelCore28;
    }
}

export default GjsGiImports;
