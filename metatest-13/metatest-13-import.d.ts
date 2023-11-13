

import MetaTest13 from '@girs/metatest-13';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest13;
    }
}

export default GjsGiImports;


