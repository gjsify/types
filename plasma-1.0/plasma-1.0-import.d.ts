
import Plasma from './plasma-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Plasma: typeof Plasma;
    }
}

export default GjsGiImports;


