
import RpmOstree from './rpmostree-1.0.js';

declare global {
    export interface GjsGiImports {
        RpmOstree: typeof RpmOstree;
    }
}

export default GjsGiImports;


