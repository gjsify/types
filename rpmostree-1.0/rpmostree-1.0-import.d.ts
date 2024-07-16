
import RpmOstree from './rpmostree-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        RpmOstree: typeof RpmOstree;
    }
}

export default GjsGiImports;


