

import GIRepository20 from '@girs/girepository-2.0';

declare global {
    export interface GjsGiImports {
        GIRepository: typeof GIRepository20;
    }
}

export default GjsGiImports;


