
import JSCore from './jscore-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        JSCore: typeof JSCore;
    }
}

export default GjsGiImports;


