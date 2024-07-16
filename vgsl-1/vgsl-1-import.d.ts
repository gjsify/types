
import Vgsl from './vgsl-1.d.ts';

declare global {
    export interface GjsGiImports {
        Vgsl: typeof Vgsl;
    }
}

export default GjsGiImports;


