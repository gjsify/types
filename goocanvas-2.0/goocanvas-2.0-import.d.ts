

import GooCanvas20 from '@girs/goocanvas-2.0';

declare global {
    export interface GjsGiImports {
        GooCanvas: typeof GooCanvas20;
    }
}

export default GjsGiImports;


