
import JSCore from './jscore-3.0.js';

declare global {
    export interface GjsGiImports {
        JSCore: typeof JSCore;
    }
}

export default GjsGiImports;


