

import MetaTest12 from '@girs/metatest-12';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest12;
    }
}

export default GjsGiImports;


