
import Geoclue from './geoclue-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Geoclue: typeof Geoclue;
    }
}

export default GjsGiImports;


