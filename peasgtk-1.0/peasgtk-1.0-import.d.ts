

import PeasGtk10 from '@girs/peasgtk-1.0';

declare global {
    export interface GjsGiImports {
        PeasGtk: typeof PeasGtk10;
    }
}

export default GjsGiImports;


