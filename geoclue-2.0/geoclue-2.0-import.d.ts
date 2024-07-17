
import Geoclue from './geoclue-2.0.js';

declare global {
    export interface GjsGiImports {
        Geoclue: typeof Geoclue;
    }
}

export default GjsGiImports;


