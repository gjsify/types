
import Vgsl from './vgsl-1.js';

declare global {
    export interface GjsGiImports {
        Vgsl: typeof Vgsl;
    }
}

export default GjsGiImports;


