
import OSTree from './ostree-1.0.js';

declare global {
    export interface GjsGiImports {
        OSTree: typeof OSTree;
    }
}

export default GjsGiImports;


