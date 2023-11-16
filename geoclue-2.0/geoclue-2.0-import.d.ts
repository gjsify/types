
import Geoclue20 from '@girs/geoclue-2.0';

declare global {
    export interface GjsGiImports {
        Geoclue: typeof Geoclue20;
    }
}

export default GjsGiImports;


