
import Xdp from './xdp-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Xdp: typeof Xdp;
    }
}

export default GjsGiImports;


