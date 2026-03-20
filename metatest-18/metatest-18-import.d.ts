import type MetaTest18 from '@girs/metatest-18';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest18;
    }
}

export default GjsGiImports;
