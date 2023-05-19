

import Gitg10 from '@girs/gitg-1.0';

declare global {
    export interface GjsGiImports {
        Gitg: typeof Gitg10;
    }
}

export default GjsGiImports;


