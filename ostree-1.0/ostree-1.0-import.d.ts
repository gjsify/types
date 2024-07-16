
import OSTree from './ostree-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        OSTree: typeof OSTree;
    }
}

export default GjsGiImports;


