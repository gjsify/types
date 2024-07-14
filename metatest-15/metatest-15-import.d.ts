
import MetaTest15 from '@girs/metatest-15';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest15;
    }
}

export default GjsGiImports;


