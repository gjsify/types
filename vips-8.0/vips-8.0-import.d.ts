

import Vips80 from '@girs/vips-8.0';

declare global {
    export interface GjsGiImports {
        Vips: typeof Vips80;
    }
}

export default GjsGiImports;


