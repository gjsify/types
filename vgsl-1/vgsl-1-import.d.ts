
import Vgsl1 from '@girs/vgsl-1';

declare global {
    export interface GjsGiImports {
        Vgsl: typeof Vgsl1;
    }
}

export default GjsGiImports;


