
import type GlyGtk42 from '@girs/glygtk4-2';

declare global {
    export interface GjsGiImports {
        GlyGtk4: typeof GlyGtk42;
    }
}

export default GjsGiImports;


