
import Gc from './gc-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gc: typeof Gc;
    }
}

export default GjsGiImports;


