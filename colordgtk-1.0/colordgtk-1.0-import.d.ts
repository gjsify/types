
import ColordGtk from './colordgtk-1.0.js';

declare global {
    export interface GjsGiImports {
        ColordGtk: typeof ColordGtk;
    }
}

export default GjsGiImports;


