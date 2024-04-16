
import OSTree10 from '@girs/ostree-1.0';


declare global {
    export interface GjsGiImports {
        OSTree: typeof OSTree10;
    }
}

export default GjsGiImports;


